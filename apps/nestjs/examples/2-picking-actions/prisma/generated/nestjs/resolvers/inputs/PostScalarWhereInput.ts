import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostScalarWhereInput {
  @ClassTransformer__Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostScalarWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostScalarWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostScalarWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null | undefined;

  @ClassTransformer__Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null | undefined;

  @ClassTransformer__Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null | undefined;

  @ClassTransformer__Type(() => BoolFilter)
  @Field(() => BoolFilter, {
    nullable: true,
    description: undefined
  })
  published?: BoolFilter | null | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null | undefined;

  @ClassTransformer__Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  content?: StringNullableFilter | null | undefined;

  @ClassTransformer__Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: StringNullableFilter | null | undefined;
}
