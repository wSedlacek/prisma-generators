import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientWhereInput {
  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ClientWhereInput[] | undefined;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ClientWhereInput[] | undefined;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ClientWhereInput[] | undefined;

  @ClassTransformer__Type(() => IntFilter)
  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  name?: StringNullableFilter | undefined;

  @ClassTransformer__Type(() => IntFilter)
  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  age?: IntFilter | undefined;

  balance?: FloatFilter | undefined;

  @ClassTransformer__Type(() => FloatFilter)
  @Field(() => FloatFilter, {
    nullable: true,
    description: undefined
  })
  amount?: FloatFilter | undefined;

  posts?: PostListRelationFilter | undefined;

  @ClassTransformer__Type(() => EnumRoleFilter)
  @Field(() => EnumRoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: EnumRoleFilter | undefined;

  @ClassTransformer__Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableFilter | undefined) {
    this.name = name;
  }

  @ClassTransformer__Type(() => FloatFilter)
  @Field(() => FloatFilter, {
    nullable: true,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFilter | undefined) {
    this.balance = balance;
  }

  @ClassTransformer__Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, {
    nullable: true,
    description: undefined
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostListRelationFilter | undefined) {
    this.posts = posts;
  }
}
