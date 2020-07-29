import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
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
