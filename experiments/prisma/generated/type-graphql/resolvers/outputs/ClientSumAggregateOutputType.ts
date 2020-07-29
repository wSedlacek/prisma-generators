import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class ClientSumAggregateOutputType {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;
}
