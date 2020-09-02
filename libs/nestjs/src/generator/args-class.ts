import path from 'path';
import { OptionalKind, Project, PropertyDeclarationStructure } from 'ts-morph';

import { argsFolderName } from './config';
import { DmmfDocument } from './dmmf/dmmf-document';
import { DMMF } from './dmmf/types';
import {
  generateClassTransformerDTOImport,
  generateEnumsImports,
  generateInputsImports,
  generateNestJSArgImport,
} from './imports';

export const generateArgsTypeClassFromArgs = (
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
      .map((argType) => argType.type),
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
        const fieldOptions = [
          `nullable: ${isOptional}`,
          ...(arg.typeName === 'take'
            ? [`defaultValue: ${dmmfDocument.options.defaultTake ?? 20}`]
            : []),
        ].join(',');

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
                `() => ${arg.nestGraphQLType}`,
                `{ ${fieldOptions} }`,
              ],
            },
          ],
        };
      }
    ),
  });
};
