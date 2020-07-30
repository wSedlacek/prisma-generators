import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneMovieArgs } from "./args/FindOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Movie)
export class FindOneMovieResolver {
  @Query(() => Movie, {
    nullable: true,
    description: undefined
  })
  async movie(@Context() ctx: any, @Args() args: FindOneMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.findOne(args) as Movie);
  }
}
