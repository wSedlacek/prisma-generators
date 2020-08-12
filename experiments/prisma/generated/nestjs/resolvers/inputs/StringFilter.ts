import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StringFilter {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  not?: string | undefined;

  @Field(() => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | undefined;

  @Field(() => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  contains?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  startsWith?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  endsWith?: string | undefined;
}