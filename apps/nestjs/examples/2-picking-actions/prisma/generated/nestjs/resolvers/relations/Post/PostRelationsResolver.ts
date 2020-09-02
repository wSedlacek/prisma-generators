import { Args, Context, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class PostRelationsResolver {
  @ResolveField(() => User, {
    nullable: true,
    description: undefined,
    complexity: ({ childComplexity }) => 1 * childComplexity
  })
  async author(@Root() post: Post, @Context() ctx: any): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.post.findOne({
      where: {
        id: post.id,
      },
    }).author({}) as User);
  }
}
