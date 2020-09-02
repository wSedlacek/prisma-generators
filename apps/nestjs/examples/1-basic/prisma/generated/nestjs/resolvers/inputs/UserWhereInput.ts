import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {
  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | null | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null | undefined;

  @ClassTransformer__Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringNullableFilter | null | undefined;

  @ClassTransformer__Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, {
    nullable: true,
    description: undefined
  })
  posts?: PostListRelationFilter | null | undefined;
}
