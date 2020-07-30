import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Category)
export class CreateCategoryResolver {
  @Mutation(() => Category, {
    nullable: false,
    description: undefined
  })
  async createCategory(@Context() ctx: any, @Args() args: CreateCategoryArgs): Promise<Category> {
    return plainToClass(Category, await ctx.prisma.category.create(args) as Category);
  }
}
