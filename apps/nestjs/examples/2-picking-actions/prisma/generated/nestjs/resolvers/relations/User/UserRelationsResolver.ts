import { Args, Context, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";
import { UserPostsArgs } from "./args/UserPostsArgs";

@Resolver(() => User)
export class UserRelationsResolver {
  @ResolveField(() => [Post], {
    nullable: true,
    description: undefined,
    complexity: ({ args, childComplexity }) => ((args.take + (args.skip ?? 0)) ?? 1) * childComplexity
  })
  async posts(@Root() user: User, @Context() ctx: any, @Args() args: UserPostsArgs): Promise<Post[] | null | undefined> {
    return plainToClass(Post, await ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).posts(args) as [Post]);
  }
}
