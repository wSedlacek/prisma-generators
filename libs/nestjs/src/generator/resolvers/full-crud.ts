import path from 'path';
import { MethodDeclarationStructure, OptionalKind, Project } from 'ts-morph';

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

export const generateCrudResolverClassFromMapping = (
  project: Project,
  baseDirPath: string,
  mapping: DMMF.Mapping,
  model: DMMF.Model,
  dmmfDocument: DmmfDocument
) => {
  const resolverDirPath = path.resolve(
    baseDirPath,
    resolversFolderName,
    crudResolversFolderName,
    model.typeName
  );
  const filePath = path.resolve(resolverDirPath, `${mapping.resolverName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSCrudImport(sourceFile);
  generateClassTransformerImport(sourceFile);
  generateGraphQLFieldsImport(sourceFile);

  generateArgsImports(
    sourceFile,
    mapping.actions.map((it) => it.argsTypeName).filter(isDefined),
    0
  );

  const distinctOutputTypesNames = [
    ...new Set(mapping.actions.map((it) => it.outputTypeName)),
  ];
  const modelOutputTypeNames = distinctOutputTypesNames
    .filter((typeName) => dmmfDocument.isModelName(typeName))
    .map((typeName) => dmmfDocument.getModelTypeName(typeName))
    .filter(isDefined);
  const otherOutputTypeNames = distinctOutputTypesNames.filter(
    (typeName) => !dmmfDocument.isModelName(typeName)
  );
  generateModelsImports(sourceFile, modelOutputTypeNames, 3);
  generateOutputsImports(sourceFile, otherOutputTypeNames, 2);

  sourceFile.addClass({
    name: mapping.resolverName,
    isExported: true,
    decorators: [
      {
        name: 'Resolver',
        arguments: [`() => ${model.typeName}`],
      },
    ],
    methods: mapping.actions.map<OptionalKind<MethodDeclarationStructure>>(
      (action) =>
        generateCrudResolverClassMethodDeclaration(
          action,
          model.typeName,
          dmmfDocument,
          mapping
        )
    ),
  });
};
