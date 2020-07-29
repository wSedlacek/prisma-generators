import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { BooleanFilter } from "../inputs/BooleanFilter";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { NullablePostKindFilter } from "../inputs/NullablePostKindFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UUIDFilter } from "../inputs/UUIDFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereInput {
  @Field(() => UUIDFilter, {
    nullable: true,
    description: undefined
  })
  uuid?: UUIDFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @Field(() => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | undefined;

  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: IntFilter | undefined;

  @Field(() => NullablePostKindFilter, {
    nullable: true,
    description: undefined
  })
  kind?: NullablePostKindFilter | undefined;

  @Field(() => JsonFilter, {
    nullable: true,
    description: undefined
  })
  metadata?: JsonFilter | undefined;

  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostWhereInput[] | undefined;

  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostWhereInput[] | undefined;

  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostWhereInput[] | undefined;

  @Field(() => ClientWhereInput, {
    nullable: true,
    description: undefined
  })
  author?: ClientWhereInput | undefined;
}
