import path from 'path';
import { Project } from 'ts-morph';

import { isDefined } from '../../utils';
import { crudResolversFolderName, resolversFolderName } from '../config';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';
import {
  generateArgsImports,
  generateClassTransformerImport,
  generateGraphQLFieldsImport,
  generateModelsImports,
  generateNestJSCrudImport,
  generateOutputsImports,
} from '../imports';
import { generateCrudResolverClassMethodDeclaration } from './helpers';

export const generateActionResolverClass = (
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  action: DMMF.Action,
  mapping: DMMF.Mapping,
  dmmfDocument: DmmfDocument
) => {
  const sourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      model.typeName,
      `${action.actionResolverName}.ts`
    ),
    undefined,
    { overwrite: true }
  );

  generateNestJSCrudImport(sourceFile);
  if (action.kind === DMMF.ModelAction.aggregate) {
    generateGraphQLFieldsImport(sourceFile);
  }
  if (action.argsTypeName) {
    generateArgsImports(sourceFile, [action.argsTypeName], 0);
  }
  generateModelsImports(
    sourceFile,
    [model.name, action.outputTypeName]
      .filter((typeName) => dmmfDocument.isModelName(typeName))
      .map((typeName) => dmmfDocument.getModelTypeName(typeName))
      .filter(isDefined),
    3
  );
  generateClassTransformerImport(sourceFile);
  generateOutputsImports(
    sourceFile,
    [action.outputTypeName].filter(
      (typeName) => !dmmfDocument.isModelName(typeName)
    ),
    2
  );

  sourceFile.addClass({
    name: action.actionResolverName,
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
        dmmfDocument,
        mapping
      ),
    ],
  });
};
