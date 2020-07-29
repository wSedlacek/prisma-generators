import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";
import { Client } from "../models/Client";
import { PostKind } from "../enums/PostKind";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Post {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  uuid!: string;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  content?: string | undefined;

  author?: Client;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  authorId!: number;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined,
  })
  kind?: keyof typeof PostKind | undefined;

  @Field(_type => GraphQLJSON, {
    nullable: false,
    description: undefined,
  })
  metadata!: JsonValue;
}
