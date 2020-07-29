import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOnePostArgs } from "./args/FindOnePostArgs";
import { Post } from "../../../models/Post";

@Resolver(() => Post)
export class FindOnePostResolver {
  @Query(() => Post, {
    nullable: true,
    description: undefined
  })
  async post(@Context() ctx: any, @Args() args: FindOnePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.findOne(args);
  }
}
