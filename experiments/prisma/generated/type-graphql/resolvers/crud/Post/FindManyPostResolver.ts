import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";

@Resolver(_of => Post)
export class FindManyPostResolver {
  @Query(_returns => [Post], {
    nullable: false,
    description: undefined
  })
  async posts(@Context() ctx: any, @Args() args: FindManyPostArgs): Promise<Post[]> {
    return ctx.prisma.post.findMany(args);
  }
}
