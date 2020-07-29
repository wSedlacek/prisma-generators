import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateMovie {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;
}
