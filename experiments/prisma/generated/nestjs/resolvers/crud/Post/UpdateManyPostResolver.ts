import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Post)
export class UpdateManyPostResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(@Context() ctx: any, @Args() args: UpdateManyPostArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.post.updateMany(args) as BatchPayload);
  }
}
