import { Args, Context, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { plainToClass } from "class-transformer";

@Resolver(() => Post)
export class PostRelationsResolver {
  @ResolveField(() => Client, {
    nullable: false,
    description: undefined,
    complexity: ({ childComplexity }) => 1 * childComplexity
  })
  async author(@Root() post: Post, @Context() ctx: any): Promise<Client> {
    return plainToClass(Client, await ctx.prisma.post.findOne({
      where: {
        uuid: post.uuid,
      },
    }).author({}) as Client);
  }
}
