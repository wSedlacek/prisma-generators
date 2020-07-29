import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@ArgsType()
export class UpsertCategoryArgs {
  @Field(_type => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;

  @Field(_type => CategoryCreateInput, { nullable: false })
  create!: CategoryCreateInput;

  @Field(_type => CategoryUpdateInput, { nullable: false })
  update!: CategoryUpdateInput;
}
