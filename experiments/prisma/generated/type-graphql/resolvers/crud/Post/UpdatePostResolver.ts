import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";

@Resolver(_of => Post)
export class UpdatePostResolver {
  @Mutation(_returns => Post, {
    nullable: true,
    description: undefined
  })
  async updatePost(@Context() ctx: any, @Args() args: UpdatePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.update(args);
  }
}
