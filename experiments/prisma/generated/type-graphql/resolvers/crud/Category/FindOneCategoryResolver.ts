import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneCategoryArgs } from "./args/FindOneCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(() => Category)
export class FindOneCategoryResolver {
  @Query(() => Category, {
    nullable: true,
    description: undefined
  })
  async category(@Context() ctx: any, @Args() args: FindOneCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.findOne(args);
  }
}
