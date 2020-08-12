import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOnePostArgs } from "./args/FindOnePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class FindOnePostResolver {
  @Query(() => Post, {
    nullable: true,
    description: undefined
  })
  async post(@Context() ctx: any, @Args() args: FindOnePostArgs): Promise<Post | undefined> {
    return plainToClass(Post, await ctx.prisma.post.findOne(args) as Post);
  }
}
