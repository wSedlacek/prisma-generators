import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { PostFilter } from "../inputs/PostFilter";
import { RoleFilter } from "../inputs/RoleFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientWhereInput {
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

  name?: NullableStringFilter | undefined;

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

  posts?: PostFilter | undefined;

  @ClassTransformer__Type(() => RoleFilter)
  @Field(() => RoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: RoleFilter | undefined;

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

  @Field(() => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: NullableStringFilter | undefined) {
    this.name = name;
  }

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

  @Field(() => PostFilter, {
    nullable: true,
    description: undefined
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostFilter | undefined) {
    this.posts = posts;
  }
}
