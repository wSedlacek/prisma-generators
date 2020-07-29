import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";

@Resolver(() => Post)
export class PostRelationsResolver {
  @ResolveField(() => Client, {
    nullable: false,
    description: undefined,
  })
  async author(@Root() post: Post, @Context() ctx: any): Promise<Client> {
    return ctx.prisma.post.findOne({
      where: {
        uuid: post.uuid,
      },
    }).author({});
  }
}
