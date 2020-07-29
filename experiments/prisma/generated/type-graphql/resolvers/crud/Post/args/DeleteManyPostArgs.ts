import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostWhereInput } from "../../../inputs/PostWhereInput";

@ArgsType()
export class DeleteManyPostArgs {
  @Field(_type => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
