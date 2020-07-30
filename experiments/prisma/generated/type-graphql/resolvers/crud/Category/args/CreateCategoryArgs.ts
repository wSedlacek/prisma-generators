import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class CreateCategoryArgs {
  @Type(() => CategoryCreateInput)
  @Field(() => CategoryCreateInput, { nullable: false })
  data!: CategoryCreateInput;
}
