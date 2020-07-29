import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutAuthorInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  uuid?: string | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | undefined;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | undefined;

  @Field(_type => GraphQLJSON, {
    nullable: false,
    description: undefined
  })
  metadata!: InputJsonValue;
}
