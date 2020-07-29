import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(_of => Category)
export class UpdateCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: true,
    description: undefined
  })
  async updateCategory(@Context() ctx: any, @Args() args: UpdateCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.update(args);
  }
}
