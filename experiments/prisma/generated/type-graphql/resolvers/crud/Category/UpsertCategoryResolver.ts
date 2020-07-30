import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Category)
export class UpsertCategoryResolver {
  @Mutation(() => Category, {
    nullable: false,
    description: undefined
  })
  async upsertCategory(@Context() ctx: any, @Args() args: UpsertCategoryArgs): Promise<Category> {
    return plainToClass(Category, await ctx.prisma.category.upsert(args) as Category);
  }
}
