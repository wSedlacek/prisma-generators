import {
  PropertyDeclarationStructure,
  OptionalKind,
  Project,
  GetAccessorDeclarationStructure,
  SetAccessorDeclarationStructure,
} from 'ts-morph';
import * as path from 'path';

import { outputsFolderName, inputsFolderName } from './config';
import {
  generateNestJSModelImport,
  generateNestJSInputImport,
  generateInputsImports,
  generateEnumsImports,
  generateArgsImports,
  generateGraphQLScalarImport,
  generatePrismaJsonTypeImport,
  generateOutputsImports,
  generateClassTransformerDTOImport,
} from './imports';
import saveSourceFile from '../utils/saveSourceFile';
import generateArgsTypeClassFromArgs from './args-class';
import { DmmfDocument } from './dmmf/dmmf-document';
import { DMMF } from './dmmf/types';
import { GenerateCodeOptions } from './options';

export const generateOutputTypeClassFromType = async (
  project: Project,
  dirPath: string,
  type: DMMF.OutputType,
  dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
) => {
  const fileDirPath = path.resolve(dirPath, outputsFolderName);
  const filePath = path.resolve(fileDirPath, `${type.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  const fieldArgsTypeNames = type.fields
    .filter((it) => it.argsTypeName)
    .map((it) => it.argsTypeName!);

  generateNestJSModelImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, options, 2);
  generateClassTransformerDTOImport(sourceFile);
  generateArgsImports(sourceFile, fieldArgsTypeNames, 0);
  generateOutputsImports(
    sourceFile,
    type.fields
      .filter((field) => field.outputType.kind === 'object')
      .map((field) => field.outputType.type),
    1
  );

  // TODO: move to the root level
  await Promise.all(
    type.fields.map(async (field) => {
      if (field.argsTypeName) {
        await generateArgsTypeClassFromArgs(
          project,
          fileDirPath,
          field.args,
          field.argsTypeName,
          dmmfDocument,
          options,
          2
        );
      }
    })
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
                `() => ${field.typeGraphQLType}`,
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

  await saveSourceFile(sourceFile);
};

export const generateInputTypeClassFromType = async (
  project: Project,
  dirPath: string,
  inputType: DMMF.InputType,
  _dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
): Promise<void> => {
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
  generatePrismaJsonTypeImport(sourceFile, options, 2);
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
      .map((fieldType) => fieldType.type as string),
    2
  );

  const fields = inputType.fields.map((field) => {
    const hasMappedName = field.name !== field.typeName;
    return {
      ...field,
      hasMappedName,
    };
  });

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
    properties: fields.map<OptionalKind<PropertyDeclarationStructure>>(
      (field) => {
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
                    `() => ${field.typeGraphQLType}`,
                    `{
                      nullable: ${isOptional},
                      description: undefined
                    }`,
                  ],
                },
              ],
        };
      }
    ),
    getAccessors: fields
      .filter((field) => field.hasMappedName)
      .map<OptionalKind<GetAccessorDeclarationStructure>>((field) => {
        return {
          name: field.typeName,
          type: field.fieldTSType,
          hasExclamationToken: field.selectedInputType.isRequired,
          hasQuestionToken: !field.selectedInputType.isRequired,
          trailingTrivia: '\r\n',
          statements: [`return this.${field.name};`],
          decorators: [
            {
              name: 'Field',
              arguments: [
                `() => ${field.typeGraphQLType}`,
                `{
                  nullable: ${!field.selectedInputType.isRequired},
                  description: undefined
                }`,
              ],
            },
          ],
        };
      }),
    setAccessors: fields
      .filter((field) => field.hasMappedName)
      .map<OptionalKind<SetAccessorDeclarationStructure>>((field) => {
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

  await saveSourceFile(sourceFile);
};
