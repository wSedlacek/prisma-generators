import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUpdateManyMutationInput } from "../../../inputs/PostUpdateManyMutationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";

@ArgsType()
export class UpdateManyPostArgs {
  @Field(_type => PostUpdateManyMutationInput, { nullable: false })
  data!: PostUpdateManyMutationInput;

  @Field(_type => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
