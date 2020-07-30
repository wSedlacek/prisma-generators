import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteManyCategoryArgs {
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
