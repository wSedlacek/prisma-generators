import { EnumMemberStructure, OptionalKind, Project } from 'ts-morph';
import path from 'path';

import { generateNestJSGraphQLImport } from './imports';
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
  const filePath = path.resolve(dirPath, `${enumDef.name}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  generateNestJSGraphQLImport(sourceFile);

  const documentation = cleanDocsString(enumDef.documentation);
  sourceFile.addEnum({
    isExported: true,
    name: enumDef.name,
    ...(documentation && {
      docs: [{ description: documentation }],
    }),
    members: enumDef.values.map<OptionalKind<EnumMemberStructure>>(
      (enumValue) => ({
        name: enumValue,
        value: enumValue,
        // TODO: add support for string enums (values)
        // TODO: add support for enum members docs
      })
    ),
  });

  // TODO: refactor to AST
  sourceFile.addStatements([
    `registerEnumType(${enumDef.name}, {
      name: "${enumDef.name}",
      description: ${documentation ? `"${documentation}"` : 'undefined'},
    });`,
  ]);

  await saveSourceFile(sourceFile);
};

export default generateEnumFromDef;
