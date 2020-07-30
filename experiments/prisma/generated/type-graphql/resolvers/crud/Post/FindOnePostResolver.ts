import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOnePostArgs } from "./args/FindOnePostArgs";
import { Post } from "../../../models/Post";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Post)
export class FindOnePostResolver {
  @Query(() => Post, {
    nullable: true,
    description: undefined
  })
  async post(@Context() ctx: any, @Args() args: FindOnePostArgs): Promise<Post | undefined> {
    return plainToClass(Post, await ctx.prisma.post.findOne(args) as Post);
  }
}
