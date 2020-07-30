import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteManyPostArgs {
  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
