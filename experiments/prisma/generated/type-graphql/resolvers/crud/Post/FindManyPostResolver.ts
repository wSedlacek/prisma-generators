import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class FindManyPostResolver {
  @Query(() => [Post], {
    nullable: false,
    description: undefined
  })
  async posts(@Context() ctx: any, @Args() args: FindManyPostArgs): Promise<Post[]> {
    return plainToClass(Post, await ctx.prisma.post.findMany(args) as [Post]);
  }
}
