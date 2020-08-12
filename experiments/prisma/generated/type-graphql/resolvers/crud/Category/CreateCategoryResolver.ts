import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";

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
