import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
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
  @ClassTransformer__Type(() => UUIDFilter)
  @Field(() => UUIDFilter, {
    nullable: true,
    description: undefined
  })
  uuid?: UUIDFilter | undefined;

  @ClassTransformer__Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @ClassTransformer__Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | undefined;

  @ClassTransformer__Type(() => BooleanFilter)
  @Field(() => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @ClassTransformer__Type(() => NullableStringFilter)
  @Field(() => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | undefined;

  @ClassTransformer__Type(() => IntFilter)
  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: IntFilter | undefined;

  @ClassTransformer__Type(() => NullablePostKindFilter)
  @Field(() => NullablePostKindFilter, {
    nullable: true,
    description: undefined
  })
  kind?: NullablePostKindFilter | undefined;

  @ClassTransformer__Type(() => JsonFilter)
  @Field(() => JsonFilter, {
    nullable: true,
    description: undefined
  })
  metadata?: JsonFilter | undefined;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostWhereInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostWhereInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostWhereInput[] | undefined;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, {
    nullable: true,
    description: undefined
  })
  author?: ClientWhereInput | undefined;
}
