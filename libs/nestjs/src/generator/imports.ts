import path from 'path';
import tsDedent from 'ts-dedent';
import { ExportDeclarationStructure, OptionalKind, SourceFile } from 'ts-morph';

import {
  argsFolderName,
  crudResolversFolderName,
  enumsFolderName,
  inputsFolderName,
  modelsFolderName,
  outputsFolderName,
  relationsResolversFolderName,
  resolversFolderName,
} from './config';
import { GenerateCodeOptions } from './options';
import { GenerateMappingData } from './types';

const NESTJS_GRAPHQL = '@nestjs/graphql';
export const generateNestJSArgImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['ArgsType', 'Field', 'Int'],
  });
};

export const generateNestJSCrudImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['Args', 'Context', 'Info', 'Query', 'Mutation', 'Resolver'],
  });
};

export const generateNestJSEnumImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['registerEnumType'],
  });
};

export const generateNestJSInputImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['Field', 'Float', 'ID', 'InputType', 'Int'],
  });
};

export const generateNestJSModelImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['Field', 'Float', 'ID', 'Int', 'ObjectType'],
  });
};

export const generateNestJSRelationsImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: NESTJS_GRAPHQL,
    namedImports: ['Args', 'Context', 'ResolveField', 'Resolver', 'Root'],
  });
};

export const generateGraphQLFieldsImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: 'graphql-fields',
    defaultImport: 'graphqlFields',
  });
  sourceFile.addImportDeclaration({
    moduleSpecifier: 'graphql',
    namedImports: ['GraphQLResolveInfo'],
  });
};

export const generateGraphQLScalarImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: 'graphql-type-json',
    defaultImport: 'GraphQLJSON',
  });
};

export const generatePrismaJsonTypeImport = (
  sourceFile: SourceFile,
  options: GenerateCodeOptions,
  level = 0
) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier:
      options.absolutePrismaOutputPath ??
      (level === 0 ? './' : '') +
        path.posix.join(
          ...Array(level).fill('..'),
          options.relativePrismaOutputPath
        ),
    namedImports: ['JsonValue', 'InputJsonValue'],
  });
};

export const generateClassTransformerImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: 'class-transformer',
    namedImports: ['plainToClass'],
  });
};

export const generateClassTransformerDTOImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: 'class-transformer',
    namedImports: [{ name: 'Type', alias: 'ClassTransformer__Type' }],
  });
};

export const generateArgsBarrelFile = (
  sourceFile: SourceFile,
  argsTypeNames: string[]
) => {
  sourceFile.addExportDeclarations(
    [...argsTypeNames]
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>((argTypeName) => ({
        moduleSpecifier: `./${argTypeName}`,
        namedExports: [argTypeName],
      }))
  );
};

export const generateModelsBarrelFile = (
  sourceFile: SourceFile,
  modelNames: string[]
) => {
  sourceFile.addExportDeclarations(
    [...modelNames]
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>((modelName) => ({
        moduleSpecifier: `./${modelName}`,
        namedExports: [modelName],
      }))
  );
};

export const generateEnumsBarrelFile = (
  sourceFile: SourceFile,
  enumTypeNames: string[]
) => {
  sourceFile.addExportDeclarations(
    [...enumTypeNames]
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>((enumTypeName) => ({
        moduleSpecifier: `./${enumTypeName}`,
        namedExports: [enumTypeName],
      }))
  );
};

export const generateInputsBarrelFile = (
  sourceFile: SourceFile,
  inputTypeNames: string[]
) => {
  sourceFile.addExportDeclarations(
    [...inputTypeNames]
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>((inputTypeName) => ({
        moduleSpecifier: `./${inputTypeName}`,
        namedExports: [inputTypeName],
      }))
  );
};

export const generateOutputsBarrelFile = (
  sourceFile: SourceFile,
  outputTypeNames: string[],
  hasSomeArgs: boolean
) => {
  sourceFile.addExportDeclarations(
    [...outputTypeNames]
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>((outputTypeName) => ({
        moduleSpecifier: `./${outputTypeName}`,
        namedExports: [outputTypeName],
      }))
  );
  if (hasSomeArgs) {
    sourceFile.addExportDeclaration({ moduleSpecifier: `./${argsFolderName}` });
  }
};

export const generateIndexFile = (
  sourceFile: SourceFile,
  hasSomeRelations: boolean
) => {
  sourceFile.addExportDeclarations([
    { moduleSpecifier: `./${enumsFolderName}` },
    { moduleSpecifier: `./${modelsFolderName}` },
    { moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}` },
    ...(hasSomeRelations
      ? [
          {
            moduleSpecifier: `./${resolversFolderName}/${relationsResolversFolderName}`,
          },
        ]
      : []),
    { moduleSpecifier: `./${resolversFolderName}/${inputsFolderName}` },
    { moduleSpecifier: `./${resolversFolderName}/${outputsFolderName}` },
  ]);
};

export const generateResolversBarrelFile = (
  type: 'crud' | 'relations',
  sourceFile: SourceFile,
  resolversData: GenerateMappingData[]
) => {
  [...resolversData]
    .sort((a, b) =>
      a.modelName > b.modelName ? 1 : a.modelName < b.modelName ? -1 : 0
    )
    .forEach(
      ({
        modelName,
        resolverName,
        actionResolverNames,
        hasSomeArgs: hasArgs,
      }) => {
        sourceFile.addImportDeclaration({
          moduleSpecifier: `./${modelName}/${resolverName}`,
          namedImports: [resolverName].sort(),
        });
        sourceFile.addExportDeclaration({
          moduleSpecifier: `./${modelName}/${resolverName}`,
          namedExports: [resolverName],
        });
        if (actionResolverNames) {
          actionResolverNames.forEach((actionResolverName) => {
            sourceFile.addExportDeclaration({
              moduleSpecifier: `./${modelName}/${actionResolverName}`,
              namedExports: [actionResolverName],
            });
          });
        }
        if (hasArgs) {
          sourceFile.addExportDeclaration({
            moduleSpecifier: `./${modelName}/args`,
          });
        }
      }
    );

  const moduleName =
    type === 'crud' ? 'CrudResolversModule' : 'RelationsResolversModule';
  const providers = [...resolversData]
    .sort((a, b) =>
      a.modelName > b.modelName ? 1 : a.modelName < b.modelName ? -1 : 0
    )
    .map(({ resolverName }) => resolverName);
  sourceFile.addImportDeclaration({
    moduleSpecifier: '@nestjs/common',
    namedImports: ['Module'].sort(),
  });
  sourceFile.addClass({
    name: moduleName,
    isExported: true,
    decorators: [
      {
        name: 'Module',
        arguments: [
          tsDedent`{
            providers: [
              ${providers.join(',\n')}
            ],
            exports: [
              ${providers.join(',\n')}
            ]
          }`,
        ],
      },
    ],
  });
};

const createImportGenerator = (elementsDirName: string) => {
  return (sourceFile: SourceFile, elementsNames: string[], level = 1) => {
    const distinctElementsNames = [...new Set(elementsNames)].sort();
    for (const elementName of distinctElementsNames) {
      sourceFile.addImportDeclaration({
        moduleSpecifier:
          (level === 0 ? './' : '') +
          path.posix.join(
            ...Array(level).fill('..'),
            elementsDirName,
            elementName
          ),
        // TODO: refactor to default exports
        // defaultImport: elementName,
        namedImports: [elementName],
      });
    }
  };
};

export const generateModelsImports = createImportGenerator(modelsFolderName);
export const generateEnumsImports = createImportGenerator(enumsFolderName);
export const generateInputsImports = createImportGenerator(inputsFolderName);
export const generateOutputsImports = createImportGenerator(outputsFolderName);
export const generateArgsImports = createImportGenerator(argsFolderName);
