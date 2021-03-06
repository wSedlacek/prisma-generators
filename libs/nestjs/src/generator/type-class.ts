import path from 'path';
import {
  GetAccessorDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  SetAccessorDeclarationStructure,
} from 'ts-morph';

import { isDefined } from '../utils';
import { inputsFolderName, outputsFolderName } from './config';
import { DmmfDocument } from './dmmf/dmmf-document';
import { DMMF } from './dmmf/types';
import {
  generateArgsImports,
  generateClassTransformerDTOImport,
  generateEnumsImports,
  generateGraphQLScalarImport,
  generateInputsImports,
  generateNestJSInputImport,
  generateNestJSModelImport,
  generateOutputsImports,
  generatePrismaJsonTypeImport,
} from './imports';
import { GenerateCodeOptions } from './options';

export const generateOutputTypeClassFromType = (
  project: Project,
  dirPath: string,
  type: DMMF.OutputType,
  dmmfDocument: DmmfDocument
) => {
  const fileDirPath = path.resolve(dirPath, outputsFolderName);
  const filePath = path.resolve(fileDirPath, `${type.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  const fieldArgsTypeNames = type.fields
    .map((it) => it.argsTypeName)
    .filter(isDefined);

  generateNestJSModelImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, dmmfDocument.options, 2);
  generateClassTransformerDTOImport(sourceFile);
  generateArgsImports(sourceFile, fieldArgsTypeNames, 0);
  generateOutputsImports(
    sourceFile,
    type.fields
      .filter((field) => field.outputType.kind === 'object')
      .map((field) => field.outputType.type),
    1
  );

  sourceFile.addClass({
    name: type.typeName,
    isExported: true,
    decorators: [
      {
        name: 'ObjectType',
        arguments: [
          `{
            isAbstract: true,
            description: undefined,
          }`,
        ],
      },
    ],
    properties: type.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      (field) => {
        const isRequired = field.outputType.isRequired;

        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: isRequired,
          hasQuestionToken: !isRequired,
          trailingTrivia: '\r\n',
          decorators: [
            ...(field.outputType.kind === 'object'
              ? [
                  {
                    name: 'ClassTransformer__Type',
                    arguments: [`() => ${field.outputType.type}`],
                  },
                ]
              : []),
            {
              name: 'Field',
              arguments: [
                `() => ${field.nestGraphQLType}`,
                `{
                  nullable: ${!isRequired},
                  description: undefined
                }`,
              ],
            },
          ],
        };
      }
    ),
  });
};

export const generateInputTypeClassFromType = (
  project: Project,
  dirPath: string,
  inputType: DMMF.InputType,
  dmmfDocument: DmmfDocument
) => {
  const filePath = path.resolve(
    dirPath,
    inputsFolderName,
    `${inputType.typeName}.ts`
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSInputImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, dmmfDocument.options, 2);
  generateClassTransformerDTOImport(sourceFile);
  generateInputsImports(
    sourceFile,
    inputType.fields
      .filter((field) => field.selectedInputType.kind === 'object')
      .map((field) => field.selectedInputType.type)
      .filter((fieldType) => fieldType !== inputType.typeName)
  );
  generateEnumsImports(
    sourceFile,
    inputType.fields
      .map((field) => field.selectedInputType)
      .filter((fieldType) => fieldType.kind === 'enum')
      .map((fieldType) => fieldType.type),
    2
  );

  const mappedFields = inputType.fields.filter((field) => field.hasMappedName);

  sourceFile.addClass({
    name: inputType.typeName,
    isExported: true,
    decorators: [
      {
        name: 'InputType',
        arguments: [
          `{
            isAbstract: true,
            description: undefined,
          }`,
        ],
      },
    ],
    properties: inputType.fields.map<
      OptionalKind<PropertyDeclarationStructure>
    >((field) => {
      const isOptional = !field.selectedInputType.isRequired;

      return {
        name: field.name,
        type: field.fieldTSType,
        hasExclamationToken: !isOptional,
        hasQuestionToken: isOptional,
        trailingTrivia: '\r\n',
        decorators: field.hasMappedName
          ? []
          : [
              ...(field.selectedInputType.kind === 'object'
                ? [
                    {
                      name: 'ClassTransformer__Type',
                      arguments: [`() => ${field.selectedInputType.type}`],
                    },
                  ]
                : []),
              {
                name: 'Field',
                arguments: [
                  `() => ${field.nestGraphQLType}`,
                  `{
                      nullable: ${isOptional},
                      description: undefined
                    }`,
                ],
              },
            ],
      };
    }),
    getAccessors: mappedFields.map<
      OptionalKind<GetAccessorDeclarationStructure>
    >((field) => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.selectedInputType.isRequired,
        hasQuestionToken: !field.selectedInputType.isRequired,
        trailingTrivia: '\r\n',
        statements: [`return this.${field.name};`],
        decorators: [
          ...(field.selectedInputType.kind === 'object'
            ? [
                {
                  name: 'ClassTransformer__Type',
                  arguments: [`() => ${field.selectedInputType.type}`],
                },
              ]
            : []),
          {
            name: 'Field',
            arguments: [
              `() => ${field.nestGraphQLType}`,
              `{
                  nullable: ${!field.selectedInputType.isRequired},
                  description: undefined
                }`,
            ],
          },
        ],
      };
    }),
    setAccessors: mappedFields.map<
      OptionalKind<SetAccessorDeclarationStructure>
    >((field) => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.selectedInputType.isRequired,
        hasQuestionToken: !field.selectedInputType.isRequired,
        trailingTrivia: '\r\n',
        parameters: [{ name: field.name, type: field.fieldTSType }],
        statements: [`this.${field.name} = ${field.name};`],
      };
    }),
  });
};
