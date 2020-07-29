import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateMovieArgs } from "./args/CreateMovieArgs";
import { Movie } from "../../../models/Movie";

@Resolver(_of => Movie)
export class CreateMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: false,
    description: undefined
  })
  async createMovie(@Context() ctx: any, @Args() args: CreateMovieArgs): Promise<Movie> {
    return ctx.prisma.movie.create(args);
  }
}
