import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Category)
export class DeleteCategoryResolver {
  @Mutation(() => Category, {
    nullable: true,
    description: undefined
  })
  async deleteCategory(@Context() ctx: any, @Args() args: DeleteCategoryArgs): Promise<Category | undefined> {
    return plainToClass(Category, await ctx.prisma.category.delete(args) as Category);
  }
}