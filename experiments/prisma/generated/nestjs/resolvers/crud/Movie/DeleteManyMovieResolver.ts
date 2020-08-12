import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Movie)
export class DeleteManyMovieResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMovie(@Context() ctx: any, @Args() args: DeleteManyMovieArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.movie.deleteMany(args) as BatchPayload);
  }
}
