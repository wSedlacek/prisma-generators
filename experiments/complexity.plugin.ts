import { Plugin } from '@nestjs/graphql';

import {
  ApolloServerPlugin,
  GraphQLRequestListener,
  GraphQLServiceContext,
} from 'apollo-server-plugin-base';
import { GraphQLSchema, separateOperations } from 'graphql';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin {
  private schema?: GraphQLSchema;
  private readonly maxComplexity = 100;

  public serverWillStart(service: GraphQLServiceContext): void {
    this.schema = service.schema;
  }

  public requestDidStart(): GraphQLRequestListener {
    return {
      didResolveOperation: ({ request, document }) => {
        if (this.schema === undefined)
          throw new Error('Schema could not be determined...');

        const complexity = getComplexity({
          schema: this.schema,
          query: request.operationName
            ? separateOperations(document)[request.operationName]
            : document,
          variables: request.variables,
          estimators: [
            fieldExtensionsEstimator(),
            simpleEstimator({ defaultComplexity: 1 }),
          ],
        });
        if (complexity > this.maxComplexity) {
          throw new Error(
            `Sorry, too complicated query (complexity: ${complexity}, max complexity: ${this.maxComplexity})`
          );
        }
      },
    };
  }
}
