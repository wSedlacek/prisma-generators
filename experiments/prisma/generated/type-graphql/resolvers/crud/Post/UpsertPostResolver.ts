import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";

@Resolver(_of => Post)
export class UpsertPostResolver {
  @Mutation(_returns => Post, {
    nullable: false,
    description: undefined
  })
  async upsertPost(@Context() ctx: any, @Args() args: UpsertPostArgs): Promise<Post> {
    return ctx.prisma.post.upsert(args);
  }
}
