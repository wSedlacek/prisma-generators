import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpsertMovieArgs } from "./args/UpsertMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";

@Resolver(() => Movie)
export class UpsertMovieResolver {
  @Mutation(() => Movie, {
    nullable: false,
    description: undefined
  })
  async upsertMovie(@Context() ctx: any, @Args() args: UpsertMovieArgs): Promise<Movie> {
    return plainToClass(Movie, await ctx.prisma.movie.upsert(args) as Movie);
  }
}
