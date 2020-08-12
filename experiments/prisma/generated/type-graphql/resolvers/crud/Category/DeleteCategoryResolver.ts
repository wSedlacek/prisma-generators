import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";

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
