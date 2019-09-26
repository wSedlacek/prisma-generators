import {
  SourceFile,
  PropertyDeclarationStructure,
  OptionalKind,
} from "ts-morph";
import { DMMF } from "@prisma/photon";

import {
  getFieldTSType,
  getTypeGraphQLType,
  selectInputTypeFromTypes,
} from "./helpers";
import { DMMFTypeInfo } from "./types";

export async function generateOutputTypeClassFromType(
  sourceFile: SourceFile,
  type: DMMF.OutputType,
  modelNames: string[],
): Promise<void> {
  sourceFile.addClass({
    name: type.name,
    isExported: true,
    decorators: [
      {
        name: "ObjectType",
        arguments: [
          `{
            isAbstract: true,
            description: undefined,
          }`,
        ],
      },
    ],
    properties: type.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      field => {
        const isRequired = field.outputType.isRequired;

        return {
          name: field.name,
          type: getFieldTSType(field.outputType as DMMFTypeInfo, modelNames),
          hasExclamationToken: isRequired,
          hasQuestionToken: !isRequired,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "Field",
              arguments: [
                `_type => ${getTypeGraphQLType(
                  field.outputType as DMMFTypeInfo,
                  modelNames,
                )}`,
                `{
                  nullable: ${!isRequired},
                  description: undefined
                }`,
              ],
            },
          ],
        };
      },
    ),
  });
}

export async function generateInputTypeClassFromType(
  sourceFile: SourceFile,
  type: DMMF.InputType,
  modelNames: string[],
): Promise<void> {
  sourceFile.addClass({
    name: type.name,
    isExported: true,
    decorators: [
      {
        name: "InputType",
        arguments: [
          `{
            isAbstract: true,
            description: undefined,
          }`,
        ],
      },
    ],
    properties: type.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      field => {
        const inputType = selectInputTypeFromTypes(field.inputType);
        return {
          name: field.name,
          type: getFieldTSType(inputType as DMMFTypeInfo, modelNames),
          hasExclamationToken: inputType.isRequired,
          hasQuestionToken: !inputType.isRequired,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "Field",
              arguments: [
                `_type => ${getTypeGraphQLType(
                  inputType as DMMFTypeInfo,
                  modelNames,
                )}`,
                `{
                  nullable: ${!inputType.isRequired},
                  description: undefined
                }`,
              ],
            },
          ],
        };
      },
    ),
  });
}