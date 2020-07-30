import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { PostKind } from "../../enums/PostKind";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutAuthorInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  uuid?: string | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @Field(() => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  content?: string | undefined;

  @Field(() => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | undefined;

  @Field(() => GraphQLJSON, {
    nullable: false,
    description: undefined
  })
  metadata!: InputJsonValue;
}
