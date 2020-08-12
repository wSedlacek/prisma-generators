import { EnumMemberStructure, OptionalKind, Project } from 'ts-morph';
import * as path from 'path';

import { generateNestJSEnumImport } from './imports';
import { enumsFolderName } from './config';
import saveSourceFile from '../utils/saveSourceFile';
import { DMMF } from './dmmf/types';
import { cleanDocsString } from './helpers';

const generateEnumFromDef = async (
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
    ...(enumDef.docs && {
      docs: [{ description: enumDef.docs }],
    }),
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
  sourceFile.addStatements([
    `registerEnumType(${enumDef.typeName}, {
      name: "${enumDef.typeName}",
      description: ${enumDef.docs ? `"${enumDef.docs}"` : 'undefined'},
    });`,
  ]);

  await saveSourceFile(sourceFile);
};

export default generateEnumFromDef;
