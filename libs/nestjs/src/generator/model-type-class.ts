import path from 'path';
import {
  GetAccessorDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
} from 'ts-morph';

import { modelsFolderName } from './config';
import { DmmfDocument } from './dmmf/dmmf-document';
import { DMMF } from './dmmf/types';
import {
  generateClassTransformerDTOImport,
  generateEnumsImports,
  generateGraphQLScalarImport,
  generateModelsImports,
  generateNestJSModelImport,
  generatePrismaJsonTypeImport,
} from './imports';

export const generateObjectTypeClassFromModel = (
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  dmmfDocument: DmmfDocument
) => {
  const dirPath = path.resolve(baseDirPath, modelsFolderName);
  const filePath = path.resolve(dirPath, `${model.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSModelImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generateClassTransformerDTOImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, dmmfDocument.options, 1);
  generateModelsImports(
    sourceFile,
    model.fields
      .filter((field) => field.kind === 'object')
      .filter((field) => field.type !== model.name)
      .map((field) => dmmfDocument.getModelTypeName(field.type) ?? field.type)
  );
  generateEnumsImports(
    sourceFile,
    model.fields
      .filter((field) => field.kind === 'enum')
      .map((field) => field.type)
  );

  const description = model.docs ? `"${model.docs}"` : 'undefined';
  sourceFile.addClass({
    name: model.typeName,
    isExported: true,
    decorators: [
      {
        name: 'ObjectType',
        arguments: [
          `{
            isAbstract: true,
            description: ${description},
          }`,
        ],
      },
    ],
    properties: model.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      (field) => {
        const isOptional = !!field.relationName || !field.isRequired;
        const fieldDescription = field.docs ? `"${field.docs}"` : 'undefined';

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
                          arguments: [`() => ${field.nestGraphQLType}`],
                        },
                      ]
                    : []),
                  {
                    name: 'Field',
                    arguments: [
                      `() => ${field.nestGraphQLType}`,
                      `{
                        nullable: ${isOptional},
                        description: ${fieldDescription},
                      }`,
                    ],
                  },
                ]),
          ],
          ...(field.docs
            ? {
                docs: [{ description: field.docs }],
              }
            : undefined),
        };
      }
    ),
    getAccessors: model.fields
      .filter(
        (field): field is Required<Omit<DMMF.Field, 'relationName'>> =>
          !!field.typeFieldAlias && !field.relationName
      )
      .map<OptionalKind<GetAccessorDeclarationStructure>>((field) => {
        const fieldDescription = field.docs ? `"${field.docs}"` : 'undefined';

        return {
          name: field.typeFieldAlias,
          returnType: field.fieldTSType,
          trailingTrivia: '\r\n',
          decorators: [
            {
              name: 'Field',
              arguments: [
                `() => ${field.nestGraphQLType}`,
                `{
                  nullable: ${!field.isRequired},
                  description: ${fieldDescription},
                }`,
              ],
            },
          ],
          statements: [`return this.${field.name};`],
          ...(field.docs
            ? {
                docs: [{ description: field.docs }],
              }
            : undefined),
        };
      }),
    ...(model.docs
      ? {
          docs: [{ description: model.docs }],
        }
      : undefined),
  });
};
