import path from 'path';
import { EnumMemberStructure, OptionalKind, Project } from 'ts-morph';

import { enumsFolderName } from './config';
import { DMMF } from './dmmf/types';
import { generateNestJSEnumImport } from './imports';

export const generateEnumFromDef = (
  project: Project,
  baseDirPath: string,
  enumDef: DMMF.Enum
) => {
  const dirPath = path.resolve(baseDirPath, enumsFolderName);
  const filePath = path.resolve(dirPath, `${enumDef.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  generateNestJSEnumImport(sourceFile);

  sourceFile.addEnum({
    isExported: true,
    name: enumDef.typeName,
    ...(enumDef.docs
      ? {
          docs: [{ description: enumDef.docs }],
        }
      : undefined),
    members: enumDef.valuesMap.map<OptionalKind<EnumMemberStructure>>(
      ({ name, value }) => ({
        name,
        value,
        // TODO: add support for string enums (values)
        // TODO: add support for enum members docs
      })
    ),
  });

  // TODO: refactor to AST
  const description = enumDef.docs ? `"${enumDef.docs}"` : 'undefined';
  sourceFile.addStatements([
    `registerEnumType(${enumDef.typeName}, {
      name: "${enumDef.typeName}",
      description: ${description},
    });`,
  ]);
};
