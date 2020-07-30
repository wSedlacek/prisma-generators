import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class CreatePostArgs {
  @Type(() => PostCreateInput)
  @Field(() => PostCreateInput, { nullable: false })
  data!: PostCreateInput;
}
