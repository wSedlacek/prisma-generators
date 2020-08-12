import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  uuid?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  published?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  content?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  authorId?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  metadata?: keyof typeof OrderByArg | undefined;
}