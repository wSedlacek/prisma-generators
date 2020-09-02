import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";
import { AggregateUser } from "../../outputs/AggregateUser";

@Resolver(() => User)
export class AggregateUserResolver {
  @Query(() => AggregateUser, {
    nullable: false,
    description: undefined
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
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
