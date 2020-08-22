import { DMMF } from './dmmf/types';

export type BaseKeys = keyof Pick<DMMF.Mapping, 'model' | 'plural'>;
export const baseKeys: BaseKeys[] = ['model', 'plural'];

export type ModelKeys = keyof Exclude<DMMF.Mapping, BaseKeys>;

type Queries = 'findOne' | 'findMany' | 'aggregate';
export type SupportedQueries = keyof Pick<typeof DMMF.ModelAction, Queries>;
export const supportedQueryActions: SupportedQueries[] = [
  'findOne',
  'findMany',
  'aggregate',
];

type Mutations =
  | 'create'
  | 'delete'
  | 'update'
  | 'deleteMany'
  | 'updateMany'
  | 'upsert';
export type SupportedMutations = keyof Pick<typeof DMMF.ModelAction, Mutations>;
export const supportedMutationActions: SupportedMutations[] = [
  'create',
  'delete',
  'update',
  'deleteMany',
  'updateMany',
  'upsert',
];

export const modelsFolderName = 'models';
export const enumsFolderName = 'enums';
export const inputsFolderName = 'inputs';
export const outputsFolderName = 'outputs';
export const resolversFolderName = 'resolvers';
export const argsFolderName = 'args';
export const relationsResolversFolderName = 'relations';
export const crudResolversFolderName = 'crud';
