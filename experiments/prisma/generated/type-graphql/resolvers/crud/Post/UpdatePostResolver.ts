import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Post)
export class UpdatePostResolver {
  @Mutation(() => Post, {
    nullable: true,
    description: undefined
  })
  async updatePost(@Context() ctx: any, @Args() args: UpdatePostArgs): Promise<Post | undefined> {
    return plainToClass(Post, await ctx.prisma.post.update(args) as Post);
  }
}
