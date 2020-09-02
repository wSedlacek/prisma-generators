import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class DeletePostResolver {
  @Mutation(() => Post, {
    nullable: true,
    description: undefined
  })
  async deletePost(@Context() ctx: any, @Args() args: DeletePostArgs): Promise<Post | null | undefined> {
    return plainToClass(Post, await ctx.prisma.post.delete(args) as Post);
  }
}
