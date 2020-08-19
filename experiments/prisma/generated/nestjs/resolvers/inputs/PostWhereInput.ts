import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { BoolFilter } from "../inputs/BoolFilter";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPostKindNullableFilter } from "../inputs/EnumPostKindNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereInput {
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

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  uuid?: StringFilter | undefined;

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

  @ClassTransformer__Type(() => BoolFilter)
  @Field(() => BoolFilter, {
    nullable: true,
    description: undefined
  })
  published?: BoolFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  content?: StringNullableFilter | undefined;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, {
    nullable: true,
    description: undefined
  })
  author?: ClientWhereInput | undefined;

  @ClassTransformer__Type(() => IntFilter)
  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: IntFilter | undefined;

  @ClassTransformer__Type(() => EnumPostKindNullableFilter)
  @Field(() => EnumPostKindNullableFilter, {
    nullable: true,
    description: undefined
  })
  kind?: EnumPostKindNullableFilter | undefined;

  @ClassTransformer__Type(() => JsonFilter)
  @Field(() => JsonFilter, {
    nullable: true,
    description: undefined
  })
  metadata?: JsonFilter | undefined;
}
