import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Post)
export class FindManyPostResolver {
  @Query(() => [Post], {
    nullable: false,
    description: undefined
  })
  async posts(@Context() ctx: any, @Args() args: FindManyPostArgs): Promise<Post[]> {
    return plainToClass(Post, await ctx.prisma.post.findMany(args) as Post[]);
  }
}
