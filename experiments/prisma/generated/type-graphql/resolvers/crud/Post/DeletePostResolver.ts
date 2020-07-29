import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { Post } from "../../../models/Post";

@Resolver(_of => Post)
export class DeletePostResolver {
  @Mutation(_returns => Post, {
    nullable: true,
    description: undefined
  })
  async deletePost(@Context() ctx: any, @Args() args: DeletePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.delete(args);
  }
}
