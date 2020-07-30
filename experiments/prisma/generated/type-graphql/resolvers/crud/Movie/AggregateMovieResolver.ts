import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass, Type } from "class-transformer";
import { AggregateMovie } from "../../outputs/AggregateMovie";

@Resolver(() => Movie)
export class AggregateMovieResolver {
  @Query(() => AggregateMovie, {
    nullable: false,
    description: undefined
  })
  async aggregateMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateMovieArgs): Promise<AggregateMovie> {
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

    return ctx.prisma.movie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
