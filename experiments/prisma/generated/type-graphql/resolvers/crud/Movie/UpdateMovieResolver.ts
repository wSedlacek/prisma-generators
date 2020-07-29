import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateMovieArgs } from "./args/UpdateMovieArgs";
import { Movie } from "../../../models/Movie";

@Resolver(_of => Movie)
export class UpdateMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async updateMovie(@Context() ctx: any, @Args() args: UpdateMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.update(args);
  }
}
