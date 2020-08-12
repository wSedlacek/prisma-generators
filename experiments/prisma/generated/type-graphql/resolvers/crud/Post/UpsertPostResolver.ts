import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class UpsertPostResolver {
  @Mutation(() => Post, {
    nullable: false,
    description: undefined
  })
  async upsertPost(@Context() ctx: any, @Args() args: UpsertPostArgs): Promise<Post> {
    return plainToClass(Post, await ctx.prisma.post.upsert(args) as Post);
  }
}
