import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(_of => Category)
export class FindManyCategoryResolver {
  @Query(_returns => [Category], {
    nullable: false,
    description: undefined
  })
  async categories(@Context() ctx: any, @Args() args: FindManyCategoryArgs): Promise<Category[]> {
    return ctx.prisma.category.findMany(args);
  }
}
