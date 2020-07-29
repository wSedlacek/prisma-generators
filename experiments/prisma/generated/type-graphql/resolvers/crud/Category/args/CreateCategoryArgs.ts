import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";

@ArgsType()
export class CreateCategoryArgs {
  @Field(() => CategoryCreateInput, { nullable: false })
  data!: CategoryCreateInput;
}
