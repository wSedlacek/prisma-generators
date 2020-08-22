import path from 'path';
import { dedent } from 'ts-dedent';
import { MethodDeclarationStructure, OptionalKind, Project } from 'ts-morph';

import { isDefined, saveSourceFile } from '../../utils';
import { generateArgsTypeClassFromArgs } from '../args-class';
import {
  argsFolderName,
  relationsResolversFolderName,
  resolversFolderName,
} from '../config';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';
import { camelCase, pascalCase } from '../helpers';
import {
  generateArgsBarrelFile,
  generateArgsImports,
  generateClassTransformerImport,
  generateModelsImports,
  generateNestJSRelationsImport,
} from '../imports';
import { GenerateCodeOptions } from '../options';
import { GeneratedResolverData } from '../types';

export const generateRelationsResolverClassesFromModel = async (
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  mapping: DMMF.Mapping,
  outputType: DMMF.OutputType,
  dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
): Promise<GeneratedResolverData> => {
  const resolverName = `${model.typeName}RelationsResolver`;
  const rootArgName = camelCase(model.typeName);
  const relationFields = model.fields.filter((field) => field.relationName);
  const singleIdField = model.fields.find((field) => field.isId);
  const singleUniqueField = model.fields.find((field) => field.isUnique);
  const singleFilterField = singleIdField ?? singleUniqueField;
  const compositeIdFields = model.fields.filter((field) =>
    model.idFields.includes(field.name)
  );
  const compositeUniqueFields = model.fields.filter((field) =>
    // taking first unique group is enough to fetch entity
    model.uniqueFields[0]?.includes(field.name)
  );
  const compositeFilterFields =
    compositeIdFields.length > 0 ? compositeIdFields : compositeUniqueFields;

  const resolverDirPath = path.resolve(
    baseDirPath,
    resolversFolderName,
    relationsResolversFolderName,
    model.typeName
  );
  const filePath = path.resolve(resolverDirPath, `${resolverName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  const methodsInfo = await Promise.all(
    relationFields.map(async (field) => {
      const outputTypeField = outputType.fields.find(
        (it) => it.name === field.name
      );

      if (!outputTypeField) {
        throw new Error('Could not generate Args Type');
      }

      let argsTypeName: string | undefined;
      if (outputTypeField.args.length > 0) {
        argsTypeName = await generateArgsTypeClassFromArgs(
          project,
          resolverDirPath,
          outputTypeField.args,
          `${model.typeName}${pascalCase(field.name)}Args`,
          dmmfDocument,
          options
        );
      }

      return {
        field,
        argsTypeName,
        fieldDocs: field.docs,
      };
    })
  );
  const argTypeNames = methodsInfo
    .map((it) => it.argsTypeName)
    .filter(isDefined);

  const barrelExportSourceFile = project.createSourceFile(
    path.resolve(resolverDirPath, argsFolderName, 'index.ts'),
    undefined,
    { overwrite: true }
  );
  if (argTypeNames.length) {
    generateArgsBarrelFile(barrelExportSourceFile, argTypeNames);
    await saveSourceFile(barrelExportSourceFile);
  }

  generateNestJSRelationsImport(sourceFile);
  generateModelsImports(
    sourceFile,
    [...relationFields.map((field) => field.type), model.name].map(
      (typeName) => dmmfDocument.getModelTypeName(typeName) ?? typeName
    ),
    3
  );
  generateClassTransformerImport(sourceFile);
  generateArgsImports(sourceFile, argTypeNames, 0);

  sourceFile.addClass({
    name: resolverName,
    isExported: true,
    decorators: [
      {
        name: 'Resolver',
        arguments: [`() => ${model.typeName}`],
      },
    ],
    methods: methodsInfo.map<OptionalKind<MethodDeclarationStructure>>(
      ({ field, fieldDocs, argsTypeName }) => {
        let whereConditionString = '';
        // TODO: refactor to AST
        if (singleFilterField) {
          whereConditionString = `
            ${singleFilterField.name}: ${rootArgName}.${singleFilterField.name},
          `;
        } else if (compositeFilterFields.length > 0) {
          const filterOptions = compositeFilterFields
            .map(
              (idField) => `${idField.name}: ${rootArgName}.${idField.name},`
            )
            .join('\n');
          whereConditionString = `
            ${compositeFilterFields.map((it) => it.name).join('_')}: {
              ${filterOptions}
            },
          `;
        } else {
          throw new Error(
            `Unexpected error happened on generating 'whereConditionString' for ${model.typeName} relation resolver`
          );
        }

        const description = fieldDocs ? `"${fieldDocs}"` : 'undefined';
        const resolveFieldOptions = [
          `nullable: ${!field.isRequired}`,
          `description: ${description}`,
          ...(!argsTypeName
            ? [`complexity: ({ childComplexity }) => 1 * childComplexity`]
            : [
                `complexity: ({ args, childComplexity }) => ((args.take + (args.skip ?? 0)) ?? 1) * childComplexity`,
              ]),
        ].join(',\n');

        return {
          name: field.typeFieldAlias ?? field.name,
          isAsync: true,
          returnType: `Promise<${field.fieldTSType}>`,
          decorators: [
            {
              name: 'ResolveField',
              arguments: [
                `() => ${field.typeGraphQLType}`,
                dedent`{
                  ${resolveFieldOptions}
                }`,
              ],
            },
          ],
          parameters: [
            {
              name: rootArgName,
              type: model.typeName,
              decorators: [{ name: 'Root', arguments: [] }],
            },
            {
              name: 'ctx',
              // TODO: import custom `ContextType`
              type: 'any',
              decorators: [{ name: 'Context', arguments: [] }],
            },
            ...(!argsTypeName
              ? []
              : [
                  {
                    name: 'args',
                    type: argsTypeName,
                    decorators: [{ name: 'Args', arguments: [] }],
                  },
                ]),
          ],
          // TODO: refactor to AST
          statements: [
            `return plainToClass(${field.typeGraphQLType.replace(
              /\[|\]/g,
              ''
            )}, await ctx.prisma.${camelCase(model.name)}.findOne({
              where: {${whereConditionString}},
            }).${field.name}(${argsTypeName ? 'args' : '{}'}) as ${
              field.typeGraphQLType
            });`,
          ],
        };
      }
    ),
  });

  await saveSourceFile(sourceFile);

  return {
    resolverName,
    argTypeNames,
    modelName: model.typeName,
  };
};
