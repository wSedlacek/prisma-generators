import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";

@Resolver(() => Movie)
export class FindManyMovieResolver {
  @Query(() => [Movie], {
    nullable: false,
    description: undefined
  })
  async movies(@Context() ctx: any, @Args() args: FindManyMovieArgs): Promise<Movie[]> {
    return plainToClass(Movie, await ctx.prisma.movie.findMany(args) as [Movie]);
  }
}
