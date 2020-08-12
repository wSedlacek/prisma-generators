import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateMovieArgs } from "./args/UpdateMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";

@Resolver(() => Movie)
export class UpdateMovieResolver {
  @Mutation(() => Movie, {
    nullable: true,
    description: undefined
  })
  async updateMovie(@Context() ctx: any, @Args() args: UpdateMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.update(args) as Movie);
  }
}
