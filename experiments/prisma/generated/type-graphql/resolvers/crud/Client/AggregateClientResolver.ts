import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClientArgs } from "./args/AggregateClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass, Type } from "class-transformer";
import { AggregateClient } from "../../outputs/AggregateClient";

@Resolver(() => Client)
export class AggregateClientResolver {
  @Query(() => AggregateClient, {
    nullable: false,
    description: undefined
  })
  async aggregateClient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateClientArgs): Promise<AggregateClient> {
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

    return ctx.prisma.user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
