import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneMovieArgs } from "./args/FindOneMovieArgs";
import { Movie } from "../../../models/Movie";

@Resolver(_of => Movie)
export class FindOneMovieResolver {
  @Query(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async movie(@Context() ctx: any, @Args() args: FindOneMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.findOne(args);
  }
}
