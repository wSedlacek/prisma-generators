import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostCreateInput } from "../../../inputs/PostCreateInput";

@ArgsType()
export class CreatePostArgs {
  @Field(() => PostCreateInput, { nullable: false })
  data!: PostCreateInput;
}
