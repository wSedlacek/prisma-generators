import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";
import { AggregateCategory } from "../../outputs/AggregateCategory";

@Resolver(() => Category)
export class AggregateCategoryResolver {
  @Query(() => AggregateCategory, {
    nullable: false,
    description: undefined
  })
  async aggregateCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateCategoryArgs): Promise<AggregateCategory> {
    const transformFields = (fields: Record<string, any>): Record<string, any> => {
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
    }

    return ctx.prisma.category.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
