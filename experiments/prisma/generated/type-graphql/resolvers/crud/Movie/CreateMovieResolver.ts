import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateMovieArgs } from "./args/CreateMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Movie)
export class CreateMovieResolver {
  @Mutation(() => Movie, {
    nullable: false,
    description: undefined
  })
  async createMovie(@Context() ctx: any, @Args() args: CreateMovieArgs): Promise<Movie> {
    return plainToClass(Movie, await ctx.prisma.movie.create(args) as Movie);
  }
}
