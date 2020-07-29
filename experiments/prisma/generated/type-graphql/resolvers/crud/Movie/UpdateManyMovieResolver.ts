import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Movie)
export class UpdateManyMovieResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMovie(@Context() ctx: any, @Args() args: UpdateManyMovieArgs): Promise<BatchPayload> {
    return ctx.prisma.movie.updateMany(args);
  }
}
