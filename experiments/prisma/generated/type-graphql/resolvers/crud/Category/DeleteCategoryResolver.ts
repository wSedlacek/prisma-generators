import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(_of => Category)
export class DeleteCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: true,
    description: undefined
  })
  async deleteCategory(@Context() ctx: any, @Args() args: DeleteCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.delete(args);
  }
}
