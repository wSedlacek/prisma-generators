import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { Movie } from "../../../models/Movie";

@Resolver(_of => Movie)
export class FindManyMovieResolver {
  @Query(_returns => [Movie], {
    nullable: false,
    description: undefined
  })
  async movies(@Context() ctx: any, @Args() args: FindManyMovieArgs): Promise<Movie[]> {
    return ctx.prisma.movie.findMany(args);
  }
}
