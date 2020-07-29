import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";

@Resolver(_of => Category)
export class UpsertCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: false,
    description: undefined
  })
  async upsertCategory(@Context() ctx: any, @Args() args: UpsertCategoryArgs): Promise<Category> {
    return ctx.prisma.category.upsert(args);
  }
}
