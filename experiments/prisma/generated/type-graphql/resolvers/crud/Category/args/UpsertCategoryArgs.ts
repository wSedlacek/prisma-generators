import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpsertCategoryArgs {
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;

  @Type(() => CategoryCreateInput)
  @Field(() => CategoryCreateInput, { nullable: false })
  create!: CategoryCreateInput;

  @Type(() => CategoryUpdateInput)
  @Field(() => CategoryUpdateInput, { nullable: false })
  update!: CategoryUpdateInput;
}
