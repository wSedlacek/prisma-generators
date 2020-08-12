import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class CreatePostResolver {
  @Mutation(() => Post, {
    nullable: false,
    description: undefined
  })
  async createPost(@Context() ctx: any, @Args() args: CreatePostArgs): Promise<Post> {
    return plainToClass(Post, await ctx.prisma.post.create(args) as Post);
  }
}
