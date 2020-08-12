import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostKind } from "../../enums/PostKind";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NullablePostKindFilter {
  @Field(() => PostKind, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof PostKind | undefined;

  @Field(() => PostKind, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof PostKind | undefined;

  @Field(() => [PostKind], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof PostKind> | undefined;

  @Field(() => [PostKind], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof PostKind> | undefined;
}