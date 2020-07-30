import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Category)
export class FindManyCategoryResolver {
  @Query(() => [Category], {
    nullable: false,
    description: undefined
  })
  async categories(@Context() ctx: any, @Args() args: FindManyCategoryArgs): Promise<Category[]> {
    return plainToClass(Category, await ctx.prisma.category.findMany(args) as Category[]);
  }
}
