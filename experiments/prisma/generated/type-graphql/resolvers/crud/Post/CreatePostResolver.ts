import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { Post } from "../../../models/Post";

@Resolver(() => Post)
export class CreatePostResolver {
  @Mutation(() => Post, {
    nullable: false,
    description: undefined
  })
  async createPost(@Context() ctx: any, @Args() args: CreatePostArgs): Promise<Post> {
    return ctx.prisma.post.create(args);
  }
}
