import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOneCategoryArgs } from "./args/FindOneCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";

@Resolver(() => Category)
export class FindOneCategoryResolver {
  @Query(() => Category, {
    nullable: true,
    description: undefined
  })
  async category(@Context() ctx: any, @Args() args: FindOneCategoryArgs): Promise<Category | undefined> {
    return plainToClass(Category, await ctx.prisma.category.findOne(args) as Category);
  }
}
