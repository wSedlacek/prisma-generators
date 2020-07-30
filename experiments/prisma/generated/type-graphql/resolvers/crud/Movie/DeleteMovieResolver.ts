import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteMovieArgs } from "./args/DeleteMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Movie)
export class DeleteMovieResolver {
  @Mutation(() => Movie, {
    nullable: true,
    description: undefined
  })
  async deleteMovie(@Context() ctx: any, @Args() args: DeleteMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.delete(args) as Movie);
  }
}
