// tslint:disable-next-line: no-namespace
export namespace DMMF {
  export interface Document {
    datamodel: Datamodel;
    schema: Schema;
    mappings: Mapping[];
  }
  export interface Enum {
    name: string;
    // values: string[];
    dbName?: string | null;
    // documentation?: string;
    // additional props
    typeName: string;
    docs?: string;
    valuesMap: { name: string; value: string }[];
  }
  export interface Datamodel {
    models: Model[];
    enums: Enum[];
  }
  export interface UniqueIndex {
    name: string;
    fields: string[];
  }
  export interface Model {
    name: string;
    isEmbedded: boolean;
    dbName: string | null;
    fields: Field[];
    uniqueFields: string[][];
    uniqueIndexes: UniqueIndex[];
    // documentation?: string;
    idFields: string[];
    // [key: string]: any;
    // additional props
    typeName: string;
    docs?: string;
  }
  export type FieldKind = 'scalar' | 'object' | 'enum';
  type DefaultField = FieldDefault | string | boolean | number;
  export interface Field {
    kind: FieldKind;
    name: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    type: string;
    dbNames: string[] | null;
    isGenerated: boolean;
    hasDefaultValue: boolean;
    default?: DefaultField;
    relationToFields?: any[];
    relationOnDelete?: string;
    relationName?: string;
    // documentation?: string;
    // [key: string]: any;
    // additional props
    typeFieldAlias?: string;
    nestGraphQLType: string;
    fieldTSType: string;
    docs?: string;
  }
  export interface FieldDefault {
    name: string;
    args: any[];
  }
  export interface Schema {
    rootQueryType?: string;
    rootMutationType?: string;
    inputTypes: InputType[];
    outputTypes: OutputType[];
    enums: Enum[];
  }
  export interface Query {
    name: string;
    args: SchemaArg[];
    output: QueryOutput;
  }
  export interface QueryOutput {
    name: string;
    isRequired: boolean;
    isList: boolean;
  }
  export type ArgType = string | InputType | Enum;
  export interface SchemaArgInputType {
    isRequired: boolean;
    isNullable: boolean;
    isList: boolean;
    // type: ArgType;
    kind: FieldKind;
    // additional props
    argType: ArgType;
    type: string;
  }
  export interface SchemaArg {
    name: string;
    // inputType: SchemaArgInputType[];
    isRelationFilter?: boolean;
    nullEqualsUndefined?: boolean;
    comment?: string;
    // additional props
    selectedInputType: SchemaArgInputType;
    typeName: string;
    nestGraphQLType: string;
    fieldTSType: string;
    hasMappedName: boolean;
  }
  export interface OutputType {
    name: string;
    fields: OutputSchemaField[];
    isEmbedded?: boolean;
    // additional props
    modelName: string;
    typeName: string;
  }
  export interface SchemaField {
    name: string;
    outputType: TypeInfo;
    args: SchemaArg[];
    // additional props
    nestGraphQLType: string;
    fieldTSType: string;
  }
  // named subtype of SchemaField->outputType
  export interface TypeInfo {
    // type: string | OutputType | Enum;
    type: string;
    isList: boolean;
    isRequired: boolean;
    kind: FieldKind;
  }
  // additional type
  export interface OutputSchemaField extends SchemaField {
    argsTypeName?: string;
  }
  export interface InputType {
    name: string;
    isWhereType?: boolean;
    isOrderType?: boolean;
    atLeastOne?: boolean;
    atMostOne?: boolean;
    fields: SchemaArg[];
    // additional props
    typeName: string;
  }
  export interface Mapping {
    model: string;
    plural: string;
    // findOne?: string | null;
    // findMany?: string | null;
    // create?: string | null;
    // update?: string | null;
    // updateMany?: string | null;
    // upsert?: string | null;
    // delete?: string | null;
    // deleteMany?: string | null;
    // aggregate?: string | null;

    // additional props
    actions: Action[];
    collectionName: string;
    resolverName: string;
  }
  // additional type
  export interface Action {
    name: string;
    fieldName: string;
    kind: ModelAction;
    operation: 'Query' | 'Mutation';
    method: OutputSchemaField;
    argsTypeName?: string;
    outputTypeName: string;
    actionResolverName: string;
  }
  export enum ModelAction {
    findOne = 'findOne',
    findMany = 'findMany',
    create = 'create',
    update = 'update',
    updateMany = 'updateMany',
    upsert = 'upsert',
    delete = 'delete',
    deleteMany = 'deleteMany',
    // additional props
    aggregate = 'aggregate',
  }
  // additional type
  export interface RelationModel {
    model: Model;
    outputType: OutputType;
    relationFields: RelationField[];
    resolverName: string;
  }
  // additional type
  export interface RelationField extends Field {
    outputTypeField: OutputSchemaField;
    argsTypeName?: string;
  }
}

type BaseFieldType = string | DMMF.Enum | DMMF.OutputType | DMMF.SchemaArg;

export interface BaseField {
  name: string;
  type: BaseFieldType;
  isList: boolean;
  isRequired: boolean;
}
