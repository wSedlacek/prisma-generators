import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class UpdatePostResolver {
  @Mutation(() => Post, {
    nullable: true,
    description: undefined
  })
  async updatePost(@Context() ctx: any, @Args() args: UpdatePostArgs): Promise<Post | null | undefined> {
    return plainToClass(Post, await ctx.prisma.post.update(args) as Post);
  }
}
