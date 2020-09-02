import { DmmfDocument } from './dmmf/dmmf-document';
import { fieldAttributeRegex, modelAttributeRegex } from './dmmf/helpers';
import { DMMF } from './dmmf/types';

export const noop = () => {};

export const getFieldTSType = (
  typeInfo: DMMF.TypeInfo,
  dmmfDocument: DmmfDocument,
  isInputType: boolean,
  modelName?: string,
  typeName?: string
) => {
  let TSType: string;
  if (typeInfo.kind === 'scalar') {
    TSType = mapScalarToTSType(typeInfo.type, isInputType);
  } else if (typeInfo.kind === 'object') {
    TSType =
      dmmfDocument.getModelTypeName(typeInfo.type) ?? (!typeName || !modelName)
        ? getInputTypeName(typeInfo.type, dmmfDocument)
        : typeInfo.type.replace(modelName, typeName);
  } else if (typeInfo.kind === 'enum') {
    TSType = `keyof typeof ${typeInfo.type}`;
  } else {
    throw new Error(`Unsupported field type kind: ${typeInfo.kind}`);
  }
  if (typeInfo.isList) {
    if (TSType.includes(' ')) {
      TSType = `Array<${TSType}>`;
    } else {
      TSType += '[]';
    }
  }
  if (!typeInfo.isRequired) {
    // FIXME: use properly null for output and undefined for input
    // TSType += ' | undefined';
    TSType += ' | null | undefined';
  }

  return TSType;
};

export const mapScalarToTSType = (scalar: string, isInputType: boolean) => {
  switch (scalar) {
    case 'ID':
    case 'UUID': {
      return 'string';
    }
    case 'String': {
      return 'string';
    }
    case 'Boolean': {
      return 'boolean';
    }
    case 'DateTime': {
      return 'Date';
    }
    case 'Int':
    case 'Float': {
      return 'number';
    }
    case 'Json':
      return isInputType ? 'InputJsonValue' : 'JsonValue';
    default:
      throw new Error(`Unrecognized scalar type: ${scalar}`);
  }
};

export const getGraphQLType = (
  typeInfo: DMMF.TypeInfo,
  dmmfDocument: DmmfDocument,
  modelName?: string,
  typeName?: string
) => {
  let GraphQLType: string;
  if (typeInfo.kind === 'scalar') {
    GraphQLType = mapScalarToType(typeInfo.type);
  } else if (typeInfo.kind === 'object') {
    GraphQLType =
      dmmfDocument.getModelTypeName(typeInfo.type) ?? (!typeName || !modelName)
        ? getInputTypeName(typeInfo.type, dmmfDocument)
        : typeInfo.type.replace(modelName, typeName);
  } else {
    GraphQLType = typeInfo.type;
  }
  if (typeInfo.isList) {
    GraphQLType = `[${GraphQLType}]`;
  }

  return GraphQLType;
};

export const mapScalarToType = (scalar: string) => {
  switch (scalar) {
    case 'DateTime': {
      return 'Date';
    }
    // TODO: use proper uuid graphql scalar
    case 'UUID': {
      return 'String';
    }
    case 'Boolean':
    case 'String': {
      return scalar;
    }
    case 'ID':
    case 'Int':
    case 'Float': {
      return `${scalar}`;
    }
    case 'Json': {
      return `GraphQLJSON`;
    }
    default: {
      throw new Error(`Unrecognized scalar type: ${scalar}`);
    }
  }
};

export const camelCase = (str: string) => {
  return str[0].toLowerCase() + str.slice(1);
};

export const pascalCase = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

const getInputKeywordPhrasePosition = (inputTypeName: string) => {
  const inputParseResult = [
    'Create',
    'OrderBy',
    'Update',
    'Upsert',
    'ScalarWhere',
    'Where',
    'ListRelationFilter',
    'RelationFilter',
    'Filter',
  ]
    .map((inputKeyword) => inputTypeName.search(inputKeyword))
    .filter((position) => position >= 0);

  if (inputParseResult.length === 0) {
    return undefined;
  }

  return inputParseResult[0];
};

export const getModelNameFromInputType = (inputTypeName: string) => {
  const keywordPhrasePosition = getInputKeywordPhrasePosition(inputTypeName);
  if (!keywordPhrasePosition) {
    return undefined;
  }

  return inputTypeName.slice(0, keywordPhrasePosition);
};

export const getInputTypeName = (
  originalInputName: string,
  dmmfDocument: DmmfDocument
): string => {
  const keywordPhrasePosition = getInputKeywordPhrasePosition(
    originalInputName
  );
  if (!keywordPhrasePosition) {
    return originalInputName;
  }

  const modelName = originalInputName.slice(0, keywordPhrasePosition);
  const typeNameRest = originalInputName.slice(keywordPhrasePosition);
  const modelTypeName = dmmfDocument.getModelTypeName(modelName);
  if (!modelTypeName) {
    return originalInputName;
  }

  return `${modelTypeName}${typeNameRest}`;
};

export const cleanDocsString = (
  documentation: string | undefined
): string | undefined => {
  if (!documentation) {
    return undefined;
  }
  let cleanedDocs = documentation;
  cleanedDocs = cleanedDocs.replace(modelAttributeRegex, '');
  cleanedDocs = cleanedDocs.replace(fieldAttributeRegex, '');
  cleanedDocs = cleanedDocs.split('"').join('\\"');
  cleanedDocs = cleanedDocs.split('\r').join('');
  cleanedDocs = cleanedDocs.split('\\r').join('');
  cleanedDocs = cleanedDocs.split('\n').join('');
  cleanedDocs = cleanedDocs.split('\\n').join('');

  return cleanedDocs;
};

export const toUnixPath = (maybeWindowsPath: string) => {
  return maybeWindowsPath.split('\\').join('/');
};
