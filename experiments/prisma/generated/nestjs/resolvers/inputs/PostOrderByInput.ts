import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  uuid?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  published?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  content?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  authorId?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  metadata?: keyof typeof SortOrder | undefined;
}
