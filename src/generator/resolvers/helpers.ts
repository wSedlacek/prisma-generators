import { getFieldTSType, getGraphQLType } from '../helpers';
import { DmmfDocument } from '../dmmf/dmmf-document';
import { DMMF } from '../dmmf/types';

export const generateCrudResolverClassMethodDeclaration = (
  action: DMMF.Action,
  typeName: string,
  method: DMMF.SchemaField,
  argsTypeName: string | undefined,
  collectionName: string,
  dmmfDocument: DmmfDocument,
  mapping: DMMF.Mapping
) => {
  const returnTSType = getFieldTSType(
    method.outputType,
    dmmfDocument,
    false,
    mapping.model,
    typeName
  );

  return {
    name: action.name,
    isAsync: true,
    returnType: `Promise<${returnTSType}>`,
    decorators: [
      {
        name: `${action.operation}`,
        arguments: [
          `() => ${getGraphQLType(
            method.outputType,
            dmmfDocument,
            mapping.model,
            typeName
          )}`,
          `{
            ${[
              `nullable: ${!method.outputType.isRequired}`,
              `description: undefined`,
            ].join(',\n')}
          }`,
        ],
      },
    ],
    parameters: [
      {
        name: 'ctx',
        // TODO: import custom `ContextType`
        type: 'any',
        decorators: [{ name: 'Context', arguments: [] }],
      },
      ...(action.kind === 'aggregate'
        ? [
            {
              name: 'info',
              type: 'GraphQLResolveInfo',
              decorators: [{ name: 'Info', arguments: [] }],
            },
          ]
        : []),
      ...(!argsTypeName
        ? []
        : [
            {
              name: 'args',
              type: argsTypeName,
              decorators: [{ name: 'Args', arguments: [] }],
            },
          ]),
    ],
    statements:
      action.kind === 'aggregate'
        ? [
            `const transformFields = (fields: Record<string, any>): Record<string, any> => {
              return Object.fromEntries(
                Object.entries(fields)
                  .filter(([key, value]) => !key.startsWith("_"))
                  .map<[string, any]>(([key, value]) => {
                    if (Object.keys(value).length === 0) {
                      return [key, true];
                    }
                    return [key, transformFields(value)];
                  }),
              );
            }`,
            `return ctx.prisma.${collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
          ]
        : [
            `return plainToClass(${returnTSType
              .replace(/\[|\]/g, '')
              .replace(
                '| undefined',
                ''
              )}, await ctx.prisma.${collectionName}.${action.kind}(${
              argsTypeName ? 'args' : ''
            }) as ${getGraphQLType(
              method.outputType,
              dmmfDocument,
              mapping.model,
              typeName
            )});`,
          ],
  };
};
