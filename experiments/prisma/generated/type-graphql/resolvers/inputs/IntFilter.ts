import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class IntFilter {
  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  equals?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  not?: number | undefined;

  @Field(() => [Int], {
    nullable: true,
    description: undefined
  })
  in?: number[] | undefined;

  @Field(() => [Int], {
    nullable: true,
    description: undefined
  })
  notIn?: number[] | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  lt?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  lte?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  gt?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  gte?: number | undefined;
}
