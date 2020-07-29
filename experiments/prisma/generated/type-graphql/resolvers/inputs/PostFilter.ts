import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostFilter {
  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PostWhereInput | undefined;

  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PostWhereInput | undefined;

  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PostWhereInput | undefined;
}
