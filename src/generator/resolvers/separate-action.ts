import { Project } from 'ts-morph';
import * as path from 'path';

import { pascalCase } from '../helpers';
import { resolversFolderName, crudResolversFolderName } from '../config';
import {
  generateNestJSCrudImport,
  generateArgsImports,
  generateModelsImports,
  generateOutputsImports,
  generateGraphQLFieldsImport,
  generateClassTransformerImport,
} from '../imports';
import saveSourceFile from '../../utils/saveSourceFile';
import { generateCrudResolverClassMethodDeclaration } from './helpers';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';

const generateActionResolverClass = async (
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  action: DMMF.Action,
  method: DMMF.SchemaField,
  outputTypeName: string,
  argsTypeName: string | undefined,
  collectionName: string,
  modelNames: string[],
  mapping: DMMF.Mapping,
  dmmfDocument: DmmfDocument
): Promise<string> => {
  const actionResolverName = `${pascalCase(action.kind)}${
    model.typeName
  }Resolver`;
  const resolverDirPath = path.resolve(
    baseDirPath,
    resolversFolderName,
    crudResolversFolderName,
    model.typeName
  );
  const filePath = path.resolve(resolverDirPath, `${actionResolverName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSCrudImport(sourceFile);
  if (action.kind === DMMF.ModelAction.aggregate) {
    generateGraphQLFieldsImport(sourceFile);
  }
  if (argsTypeName) {
    generateArgsImports(sourceFile, [argsTypeName], 0);
  }
  generateModelsImports(
    sourceFile,
    [model.name, outputTypeName]
      .filter((name) => modelNames.includes(name))
      .map((typeName) =>
        dmmfDocument.isModelName(typeName)
          ? dmmfDocument.getModelTypeName(typeName)!
          : typeName
      ),
    3
  );
  generateClassTransformerImport(sourceFile);
  generateOutputsImports(
    sourceFile,
    [outputTypeName].filter((name) => !modelNames.includes(name)),
    2
  );

  sourceFile.addClass({
    name: actionResolverName,
    isExported: true,
    decorators: [
      {
        name: 'Resolver',
        arguments: [`() => ${model.typeName}`],
      },
    ],
    methods: [
      generateCrudResolverClassMethodDeclaration(
        action,
        model.typeName,
        method,
        argsTypeName,
        collectionName,
        dmmfDocument,
        mapping
      ),
    ],
  });

  await saveSourceFile(sourceFile);
  return actionResolverName;
};

export default generateActionResolverClass;
