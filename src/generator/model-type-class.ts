import {
  PropertyDeclarationStructure,
  OptionalKind,
  Project,
  GetAccessorDeclarationStructure,
} from 'ts-morph';
import path from 'path';

import {
  generateNestJSModelImport,
  generateModelsImports,
  generateEnumsImports,
  generateGraphQLScalarImport,
  generatePrismaJsonTypeImport,
  generateClassTransformerDTOImport,
} from './imports';
import { modelsFolderName } from './config';
import saveSourceFile from '../utils/saveSourceFile';
import { DMMF } from './dmmf/types';
import { DmmfDocument } from './dmmf/dmmf-document';
import { GenerateCodeOptions } from './options';

const generateObjectTypeClassFromModel = async (
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
) => {
  const dirPath = path.resolve(baseDirPath, modelsFolderName);
  const filePath = path.resolve(dirPath, `${model.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSModelImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generateClassTransformerDTOImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, options, 1);
  generateModelsImports(
    sourceFile,
    model.fields
      .filter((field) => field.kind === 'object')
      .filter((field) => field.type !== model.name)
      .map((field) =>
        dmmfDocument.isModelName(field.type)
          ? dmmfDocument.getModelTypeName(field.type)!
          : field.type
      )
  );
  generateEnumsImports(
    sourceFile,
    model.fields
      .filter((field) => field.kind === 'enum')
      .map((field) => field.type)
  );

  sourceFile.addClass({
    name: model.typeName,
    isExported: true,
    decorators: [
      {
        name: 'ObjectType',
        arguments: [
          `{
            isAbstract: true,
            description: ${model.docs ? `"${model.docs}"` : 'undefined'},
          }`,
        ],
      },
    ],
    properties: model.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      (field) => {
        const isOptional = !!field.relationName || !field.isRequired;

        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: !isOptional,
          hasQuestionToken: isOptional,
          trailingTrivia: '\r\n',
          decorators: [
            ...(field.relationName || field.typeFieldAlias
              ? []
              : [
                  ...(field.type === 'DateTime'
                    ? [
                        {
                          name: 'ClassTransformer__Type',
                          arguments: [`() => ${field.typeGraphQLType}`],
                        },
                      ]
                    : []),
                  {
                    name: 'Field',
                    arguments: [
                      `() => ${field.typeGraphQLType}`,
                      `{
                        nullable: ${isOptional},
                        description: ${
                          field.docs ? `"${field.docs}"` : 'undefined'
                        },
                      }`,
                    ],
                  },
                ]),
          ],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      }
    ),
    getAccessors: model.fields
      .filter((field) => field.typeFieldAlias && !field.relationName)
      .map<OptionalKind<GetAccessorDeclarationStructure>>((field) => {
        return {
          name: field.typeFieldAlias!,
          returnType: field.fieldTSType,
          trailingTrivia: '\r\n',
          decorators: [
            {
              name: 'Field',
              arguments: [
                `() => ${field.typeGraphQLType}`,
                `{
                  nullable: ${!field.isRequired},
                  description: ${field.docs ? `"${field.docs}"` : 'undefined'},
                }`,
              ],
            },
          ],
          statements: [`return this.${field.name};`],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      }),
    ...(model.docs && {
      docs: [{ description: model.docs }],
    }),
  });

  await saveSourceFile(sourceFile);
};

export default generateObjectTypeClassFromModel;
