import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";

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
