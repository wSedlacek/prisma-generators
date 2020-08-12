import { Args, Context, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";
import { ClientPostsArgs } from "./args/ClientPostsArgs";

@Resolver(() => Client)
export class ClientRelationsResolver {
  @ResolveField(() => [Post], {
    nullable: true,
    description: undefined,
    complexity: ({ args, childComplexity }) => ((args as ClientPostsArgs).take ?? 1) * childComplexity
  })
  async clientPosts(@Root() client: Client, @Context() ctx: any, @Args() args: ClientPostsArgs): Promise<Post[] | undefined> {
    return plainToClass(Post, await ctx.prisma.user.findOne({
      where: {
        id: client.id,
      },
    }).posts(args) as [Post]);
  }
}
