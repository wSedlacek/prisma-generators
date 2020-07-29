import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@ArgsType()
export class UpsertPostArgs {
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;

  @Field(() => PostCreateInput, { nullable: false })
  create!: PostCreateInput;

  @Field(() => PostUpdateInput, { nullable: false })
  update!: PostUpdateInput;
}
