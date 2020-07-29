import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindOneCategoryArgs } from "./args/FindOneCategoryArgs";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Category)
export class CategoryCrudResolver {
  @Query(() => Category, {
    nullable: true,
    description: undefined
  })
  async category(@Context() ctx: any, @Args() args: FindOneCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.findOne(args);
  }

  @Query(() => [Category], {
    nullable: false,
    description: undefined
  })
  async categories(@Context() ctx: any, @Args() args: FindManyCategoryArgs): Promise<Category[]> {
    return ctx.prisma.category.findMany(args);
  }

  @Mutation(() => Category, {
    nullable: false,
    description: undefined
  })
  async createCategory(@Context() ctx: any, @Args() args: CreateCategoryArgs): Promise<Category> {
    return ctx.prisma.category.create(args);
  }

  @Mutation(() => Category, {
    nullable: true,
    description: undefined
  })
  async deleteCategory(@Context() ctx: any, @Args() args: DeleteCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.delete(args);
  }

  @Mutation(() => Category, {
    nullable: true,
    description: undefined
  })
  async updateCategory(@Context() ctx: any, @Args() args: UpdateCategoryArgs): Promise<Category | undefined> {
    return ctx.prisma.category.update(args);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategory(@Context() ctx: any, @Args() args: DeleteManyCategoryArgs): Promise<BatchPayload> {
    return ctx.prisma.category.deleteMany(args);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategory(@Context() ctx: any, @Args() args: UpdateManyCategoryArgs): Promise<BatchPayload> {
    return ctx.prisma.category.updateMany(args);
  }

  @Mutation(() => Category, {
    nullable: false,
    description: undefined
  })
  async upsertCategory(@Context() ctx: any, @Args() args: UpsertCategoryArgs): Promise<Category> {
    return ctx.prisma.category.upsert(args);
  }

  @Query(() => AggregateCategory, {
    nullable: false,
    description: undefined
  })
  async aggregateCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateCategoryArgs): Promise<AggregateCategory> {
    const transformFields = (fields: Record<string, any>): Record<string, any> => {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.category.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
