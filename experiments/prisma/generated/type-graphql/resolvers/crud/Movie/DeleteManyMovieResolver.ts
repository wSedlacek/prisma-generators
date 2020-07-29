import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Movie)
export class DeleteManyMovieResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMovie(@Context() ctx: any, @Args() args: DeleteManyMovieArgs): Promise<BatchPayload> {
    return ctx.prisma.movie.deleteMany(args);
  }
}
