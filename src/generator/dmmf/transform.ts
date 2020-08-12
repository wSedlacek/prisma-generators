import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { DMMF } from './types';
import { parseDocumentationAttributes } from './helpers';
import {
  getInputTypeName,
  camelCase,
  getModelNameFromInputType,
  getGraphQLType,
  getFieldTSType,
  pascalCase,
} from '../helpers';
import { DmmfDocument } from './dmmf-document';
import * as pluralize from 'pluralize';
import { GenerateCodeOptions } from '../options';
import { supportedQueryActions, supportedMutationActions } from '../config';

export const transformSchema = (
  datamodel: PrismaDMMF.Schema,
  dmmfDocument: DmmfDocument
): DMMF.Schema => {
  return {
    enums: datamodel.enums.map(transformEnums(dmmfDocument)),
    inputTypes: datamodel.inputTypes.map(transformInputType(dmmfDocument)),
    outputTypes: datamodel.outputTypes.map(transformOutputType(dmmfDocument)),
    rootMutationType: datamodel.rootMutationType,
    rootQueryType: datamodel.rootQueryType,
  };
};

export const transformMappings = (
  mapping: PrismaDMMF.Mapping[],
  dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
): DMMF.Mapping[] => {
  return mapping.map(transformMapping(dmmfDocument, options));
};

export const transformBareModel = (model: PrismaDMMF.Model): DMMF.Model => {
  const attributeArgs = parseDocumentationAttributes(
    model.documentation,
    'type',
    'model'
  );
  const typeName = attributeArgs?.slice(1, -1);
  return {
    ...model,
    typeName: typeName ?? pascalCase(model.name),
    fields: [],
  };
};

export const transformModelWithFields = (dmmfDocument: DmmfDocument) => {
  return (model: PrismaDMMF.Model): DMMF.Model => {
    return {
      ...transformBareModel(model),
      fields: model.fields.map(transformField(dmmfDocument)),
    };
  };
};

const transformField = (dmmfDocument: DmmfDocument) => {
  return (field: PrismaDMMF.Field): DMMF.Field => {
    const attributeArgs = parseDocumentationAttributes(
      field.documentation,
      'field',
      'field'
    );
    const typeFieldAlias = attributeArgs?.slice(1, -1);
    const fieldTSType = getFieldTSType(field, dmmfDocument, false);
    const typeGraphQLType = getGraphQLType(field, dmmfDocument);
    return {
      ...field,
      typeFieldAlias,
      fieldTSType,
      typeGraphQLType,
    };
  };
};

const transformInputType = (dmmfDocument: DmmfDocument) => {
  return (inputType: PrismaDMMF.InputType): DMMF.InputType => {
    const modelName = getModelNameFromInputType(inputType.name);
    const modelType = modelName
      ? dmmfDocument.datamodel.models.find((it) => it.name === modelName)
      : undefined;
    return {
      ...inputType,
      typeName: getInputTypeName(inputType.name, dmmfDocument),
      fields: inputType.fields.map<DMMF.SchemaArg>((field) => {
        const modelField = modelType?.fields.find(
          (it) => it.name === field.name
        );
        const typeName = modelField?.typeFieldAlias ?? field.name;
        const selectedInputType = selectInputTypeFromTypes(dmmfDocument)(
          field.inputType
        );
        const typeGraphQLType = getGraphQLType(selectedInputType, dmmfDocument);
        const fieldTSType = getFieldTSType(
          selectedInputType,
          dmmfDocument,
          true
        );
        return {
          ...field,
          selectedInputType,
          typeName,
          typeGraphQLType,
          fieldTSType,
        };
      }),
    };
  };
};

const transformOutputType = (dmmfDocument: DmmfDocument) => {
  return (outputType: PrismaDMMF.OutputType): DMMF.OutputType => {
    // TODO: make it more future-proof
    const modelName = outputType.name.replace('Aggregate', '');
    const typeName = getMappedOutputTypeName(dmmfDocument, outputType.name);

    return {
      ...outputType,
      modelName,
      typeName,
      fields: outputType.fields.map<DMMF.OutputSchemaField>((field) => {
        const outputType: DMMF.SchemaField['outputType'] = {
          ...field.outputType,
          type: getMappedOutputTypeName(
            dmmfDocument,
            field.outputType.type as string
          ),
        };
        const fieldTSType = getFieldTSType(outputType, dmmfDocument, false);
        const typeGraphQLType = getGraphQLType(outputType, dmmfDocument);
        const args = field.args.map<DMMF.SchemaArg>((arg) => {
          const selectedInputType = selectInputTypeFromTypes(dmmfDocument)(
            arg.inputType
          );
          const typeGraphQLType = getGraphQLType(
            selectedInputType,
            dmmfDocument
          );
          const fieldTSType = getFieldTSType(
            selectedInputType,
            dmmfDocument,
            true
          );

          return {
            ...arg,
            selectedInputType,
            fieldTSType,
            typeGraphQLType,
            // TODO: add proper mapping in the future if needed
            typeName: arg.name,
          };
        });
        const argsTypeName =
          args.length > 0
            ? `${typeName}${pascalCase(field.name)}Args`
            : undefined;

        return {
          ...field,
          outputType,
          fieldTSType,
          typeGraphQLType,
          args,
          argsTypeName,
        };
      }),
    };
  };
};

const getMappedOutputTypeName = (
  dmmfDocument: DmmfDocument,
  outputTypeName: string
): string => {
  if (outputTypeName.startsWith('Aggregate')) {
    return `Aggregate${dmmfDocument.getModelTypeName(
      outputTypeName.replace('Aggregate', '')
    )}`;
  }

  const dedicatedTypeSuffix = [
    'MinAggregateOutputType',
    'MaxAggregateOutputType',
    'AvgAggregateOutputType',
    'SumAggregateOutputType',
  ].find((type) => outputTypeName.includes(type));
  if (dedicatedTypeSuffix) {
    const modelName = outputTypeName.replace(dedicatedTypeSuffix, '');
    // console.log(outputTypeName, modelName, dedicatedTypeSuffix);
    return `${dmmfDocument.getModelTypeName(modelName)}${dedicatedTypeSuffix}`;
  }

  return outputTypeName;
};

const transformMapping = (
  dmmfDocument: DmmfDocument,
  options: GenerateCodeOptions
) => {
  return (mapping: PrismaDMMF.Mapping): DMMF.Mapping => {
    const { model, plural, ...availableActions } = mapping;
    const actions = Object.entries(availableActions).map<DMMF.Action>(
      ([modelAction, fieldName]) => {
        const kind = modelAction as DMMF.ModelAction;
        const modelName = dmmfDocument.getModelTypeName(model) ?? model;
        return {
          name: getMappedActionName(kind, modelName, options),
          fieldName,
          kind: kind,
          operation: getOperationKindName(kind) as any,
        };
      }
    );
    return { model, plural, actions };
  };
};

const selectInputTypeFromTypes = (dmmfDocument: DmmfDocument) => {
  return (
    inputTypes: PrismaDMMF.SchemaArgInputType[]
  ): DMMF.SchemaArgInputType => {
    const selectedInputType =
      inputTypes.find((it) => it.kind === 'object') ||
      inputTypes.find((it) => it.kind === 'enum') ||
      inputTypes[0];
    const inputType = selectedInputType.type as string;
    return {
      ...selectedInputType,
      argType: selectedInputType.type as DMMF.ArgType, // input type mapping
      type:
        selectedInputType.kind === 'object'
          ? getInputTypeName(inputType, dmmfDocument)
          : inputType,
    };
  };
};

const getMappedActionName = (
  actionName: DMMF.ModelAction,
  typeName: string,
  options: GenerateCodeOptions
): string => {
  const defaultMappedActionName = `${actionName}${typeName}`;
  if (options.useOriginalMapping) {
    return defaultMappedActionName;
  }

  const hasNoPlural = typeName === pluralize(typeName);
  if (hasNoPlural) {
    return defaultMappedActionName;
  }

  switch (actionName) {
    case 'findOne': {
      return camelCase(typeName);
    }
    case 'findMany': {
      return pluralize(camelCase(typeName));
    }
    default: {
      return defaultMappedActionName;
    }
  }
};

const getOperationKindName = (actionName: string): string | undefined => {
  if (supportedQueryActions.includes(actionName as any)) return 'Query';
  if (supportedMutationActions.includes(actionName as any)) return 'Mutation';
};

export const transformEnums = (dmmfDocument: DmmfDocument) => {
  return (enumDef: PrismaDMMF.Enum): DMMF.Enum => {
    const modelName = enumDef.name.includes('DistinctFieldEnum')
      ? enumDef.name.replace('DistinctFieldEnum', '')
      : undefined;
    const typeName = modelName
      ? `${dmmfDocument.getModelTypeName(modelName)}DistinctFieldEnum`
      : enumDef.name;

    return {
      ...enumDef,
      typeName,
      valuesMap: enumDef.values.map((value) => ({
        value,
        name:
          (modelName && dmmfDocument.getModelFieldAlias(modelName, value)) ||
          value,
      })),
    };
  };
};
