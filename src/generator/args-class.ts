import { PropertyDeclarationStructure, OptionalKind, Project } from 'ts-morph';
import * as path from 'path';

import { argsFolderName } from './config';
import {
  generateNestJSArgImport,
  generateInputsImports,
  generateEnumsImports,
  generateGraphQLScalarImport,
  generateClassTransformerDTOImport,
} from './imports';
import saveSourceFile from '../utils/saveSourceFile';
import { DmmfDocument } from './dmmf/dmmf-document';
import { DMMF } from './dmmf/types';

const generateArgsTypeClassFromArgs = async (
  project: Project,
  generateDirPath: string,
  fields: DMMF.SchemaArg[],
  argsTypeName: string,
  dmmfDocument: DmmfDocument,
  inputImportsLevel = 3
) => {
  const dirPath = path.resolve(generateDirPath, argsFolderName);
  const filePath = path.resolve(dirPath, `${argsTypeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSArgImport(sourceFile);
  generateInputsImports(
    sourceFile,
    fields
      .map((arg) => arg.selectedInputType)
      .filter((argInputType) => argInputType.kind === 'object')
      .map((argInputType) => argInputType.type),
    inputImportsLevel
  );
  generateClassTransformerDTOImport(sourceFile);
  generateEnumsImports(
    sourceFile,
    fields
      .map((field) => field.selectedInputType)
      .filter((argType) => argType.kind === 'enum')
      .map((argType) => argType.type as string),
    4
  );

  sourceFile.addClass({
    name: argsTypeName,
    isExported: true,
    decorators: [
      {
        name: 'ArgsType',
        arguments: [],
      },
    ],
    properties: fields.map<OptionalKind<PropertyDeclarationStructure>>(
      (arg) => {
        const isOptional = !arg.selectedInputType.isRequired;

        return {
          name: arg.typeName,
          type: arg.fieldTSType,
          hasExclamationToken: !isOptional,
          hasQuestionToken: isOptional,
          trailingTrivia: '\r\n',
          decorators: [
            ...(arg.selectedInputType.kind === 'object'
              ? [
                  {
                    name: 'ClassTransformer__Type',
                    arguments: [`() => ${arg.selectedInputType.type}`],
                  },
                ]
              : []),
            {
              name: 'Field',
              arguments: [
                `() => ${arg.typeGraphQLType}`,
                `{ ${[
                  `nullable: ${isOptional}`,
                  ...(arg.typeName === 'take' ? ['defaultValue: 20'] : []),
                ].join(',')} }`,
              ],
            },
          ],
        };
      }
    ),
  });

  await saveSourceFile(sourceFile);
  return argsTypeName;
};

export default generateArgsTypeClassFromArgs;
