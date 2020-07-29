import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(_of => Category)
export class CreateCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: false,
    description: undefined
  })
  async createCategory(@Context() ctx: any, @Args() args: CreateCategoryArgs): Promise<Category> {
    return ctx.prisma.category.create(args);
  }
}
