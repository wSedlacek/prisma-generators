import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteCategoryArgs {
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
