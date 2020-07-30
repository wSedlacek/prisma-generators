import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class ClientMinAggregateOutputType {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  id!: number;

  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;
}
