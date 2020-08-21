import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";
import { AggregateDirector } from "../../outputs/AggregateDirector";

@Resolver(() => Director)
export class AggregateDirectorResolver {
  @Query(() => AggregateDirector, {
    nullable: false,
    description: undefined
  })
  async aggregateDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateDirectorArgs): Promise<AggregateDirector> {
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

    return ctx.prisma.director.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
