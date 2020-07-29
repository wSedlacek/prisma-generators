import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { ClientPostsArgs } from "./args/ClientPostsArgs";

@Resolver(() => Client)
export class ClientRelationsResolver {
  @ResolveField(() => [Post], {
    nullable: true,
    description: undefined,
  })
  async clientPosts(@Root() client: Client, @Context() ctx: any, @Args() args: ClientPostsArgs): Promise<Post[] | undefined> {
    return ctx.prisma.user.findOne({
      where: {
        id: client.id,
      },
    }).posts(args);
  }
}
