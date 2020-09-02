import path from 'path';
import { dedent } from 'ts-dedent';
import { MethodDeclarationStructure, OptionalKind, Project } from 'ts-morph';

import { isDefined } from '../../utils';
import { relationsResolversFolderName, resolversFolderName } from '../config';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';
import { camelCase } from '../helpers';
import {
  generateArgsImports,
  generateClassTransformerImport,
  generateModelsImports,
  generateNestJSRelationsImport,
} from '../imports';

export const generateRelationsResolverClassesFromModel = (
  project: Project,
  baseDirPath: string,
  dmmfDocument: DmmfDocument,
  { model, relationFields, resolverName }: DMMF.RelationModel
) => {
  const rootArgName = camelCase(model.typeName);
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

  generateNestJSRelationsImport(sourceFile);
  generateModelsImports(
    sourceFile,
    [...relationFields.map((field) => field.type), model.name].map(
      (typeName) => dmmfDocument.getModelTypeName(typeName) ?? typeName
    ),
    3
  );
  generateClassTransformerImport(sourceFile);

  const argTypeNames = relationFields
    .map((it) => it.argsTypeName)
    .filter(isDefined);
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
    methods: relationFields.map<OptionalKind<MethodDeclarationStructure>>(
      (field) => {
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

        const description = field.docs ? `"${field.docs}"` : 'undefined';
        const resolveFieldOptions = [
          `nullable: ${!field.isRequired}`,
          `description: ${description}`,
          ...(!field.argsTypeName
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
                `() => ${field.nestGraphQLType}`,
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
            ...(!field.argsTypeName
              ? []
              : [
                  {
                    name: 'args',
                    type: field.argsTypeName,
                    decorators: [{ name: 'Args', arguments: [] }],
                  },
                ]),
          ],
          // TODO: refactor to AST
          statements: [
            `return plainToClass(${field.nestGraphQLType.replace(
              /\[|\]/g,
              ''
            )}, await ctx.prisma.${camelCase(model.name)}.findOne({
              where: {${whereConditionString}},
            }).${field.name}(${field.argsTypeName ? 'args' : '{}'}) as ${
              field.nestGraphQLType
            });`,
          ],
        };
      }
    ),
  });
};
