import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Movie)
export class UpdateManyMovieResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMovie(@Context() ctx: any, @Args() args: UpdateManyMovieArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.movie.updateMany(args) as BatchPayload);
  }
}
