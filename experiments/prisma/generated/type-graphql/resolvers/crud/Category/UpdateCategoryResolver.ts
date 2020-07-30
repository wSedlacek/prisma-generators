import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Category)
export class UpdateCategoryResolver {
  @Mutation(() => Category, {
    nullable: true,
    description: undefined
  })
  async updateCategory(@Context() ctx: any, @Args() args: UpdateCategoryArgs): Promise<Category | undefined> {
    return plainToClass(Category, await ctx.prisma.category.update(args) as Category);
  }
}
