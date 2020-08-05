import { OptionalKind, MethodDeclarationStructure, Project } from 'ts-morph';
import * as path from 'path';

import { GeneratedResolverData } from '../types';
import {
  resolversFolderName,
  crudResolversFolderName,
  argsFolderName,
} from '../config';
import generateArgsTypeClassFromArgs from '../args-class';
import {
  generateNestJSCrudImport,
  generateArgsImports,
  generateModelsImports,
  generateOutputsImports,
  generateArgsBarrelFile,
  generateGraphQLFieldsImport,
  generateClassTransformerImport,
} from '../imports';
import saveSourceFile from '../../utils/saveSourceFile';
import generateActionResolverClass from './separate-action';
import { GenerateCodeOptions } from '../options';
import { generateCrudResolverClassMethodDeclaration } from './helpers';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';

const generateCrudResolverClassFromMapping = async (
  project: Project,
  baseDirPath: string,
  mapping: DMMF.Mapping,
  model: DMMF.Model,
  modelNames: string[],
  options: GenerateCodeOptions,
  dmmfDocument: DmmfDocument
): Promise<GeneratedResolverData> => {
  const resolverName = `${model.typeName}CrudResolver`;

  const resolverDirPath = path.resolve(
    baseDirPath,
    resolversFolderName,
    crudResolversFolderName,
    model.typeName
  );
  const filePath = path.resolve(resolverDirPath, `${resolverName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateNestJSCrudImport(sourceFile);
  generateGraphQLFieldsImport(sourceFile);

  await Promise.all(
    mapping.actions
      .filter((it) => it.argsTypeName)
      .map(async (action) => {
        await generateArgsTypeClassFromArgs(
          project,
          resolverDirPath,
          action.method.args,
          action.argsTypeName!,
          dmmfDocument,
          options
        );
      })
  );
  const argTypeNames = mapping.actions
    .filter((it) => it.argsTypeName !== undefined)
    .map((it) => it.argsTypeName!);

  if (argTypeNames.length) {
    const barrelExportSourceFile = project.createSourceFile(
      path.resolve(resolverDirPath, argsFolderName, 'index.ts'),
      undefined,
      { overwrite: true }
    );
    generateArgsBarrelFile(
      barrelExportSourceFile,
      mapping.actions
        .filter((it) => it.argsTypeName !== undefined)
        .map((it) => it.argsTypeName!)
    );
    await saveSourceFile(barrelExportSourceFile);
  }

  generateArgsImports(sourceFile, argTypeNames, 0);

  const distinctOutputTypesNames = [
    ...new Set(mapping.actions.map((it) => it.outputTypeName)),
  ];
  generateModelsImports(
    sourceFile,
    distinctOutputTypesNames
      .filter((typeName) => modelNames.includes(typeName))
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
    distinctOutputTypesNames.filter(
      (typeName) => !modelNames.includes(typeName)
    ),
    2
  );

  sourceFile.addClass({
    name: resolverName,
    isExported: true,
    decorators: [
      {
        name: 'Resolver',
        arguments: [`() => ${model.typeName}`],
      },
    ],
    methods: await Promise.all(
      mapping.actions.map<OptionalKind<MethodDeclarationStructure>>((action) =>
        generateCrudResolverClassMethodDeclaration(
          action,
          model.typeName,
          dmmfDocument,
          mapping
        )
      )
    ),
  });

  const actionResolverNames = await Promise.all(
    mapping.actions.map((action) =>
      generateActionResolverClass(
        project,
        baseDirPath,
        model,
        action,
        modelNames,
        mapping,
        dmmfDocument
      )
    )
  );

  await saveSourceFile(sourceFile);
  return {
    modelName: model.typeName,
    resolverName,
    actionResolverNames,
    argTypeNames,
  };
};

export default generateCrudResolverClassFromMapping;
