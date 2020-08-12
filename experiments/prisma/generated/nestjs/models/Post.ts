import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";
import { Client } from "../models/Client";
import { PostKind } from "../enums/PostKind";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Post {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  uuid!: string;

  @Field(() => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(() => Boolean, {
    nullable: false,
    description: undefined,
  })
  published!: boolean;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined,
  })
  content?: string | undefined;

  author?: Client;

  @Field(() => Int, {
    nullable: false,
    description: undefined,
  })
  authorId!: number;

  @Field(() => PostKind, {
    nullable: true,
    description: undefined,
  })
  kind?: keyof typeof PostKind | undefined;

  @Field(() => GraphQLJSON, {
    nullable: false,
    description: undefined,
  })
  metadata!: JsonValue;
}
