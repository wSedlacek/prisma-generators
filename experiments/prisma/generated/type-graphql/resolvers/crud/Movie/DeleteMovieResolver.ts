import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteMovieArgs } from "./args/DeleteMovieArgs";
import { Movie } from "../../../models/Movie";

@Resolver(_of => Movie)
export class DeleteMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async deleteMovie(@Context() ctx: any, @Args() args: DeleteMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.delete(args);
  }
}
