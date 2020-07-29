import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
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
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  name?: NullableStringFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  age?: IntFilter | undefined;

  balance?: FloatFilter | undefined;

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  amount?: FloatFilter | undefined;

  posts?: PostFilter | undefined;

  @Field(_type => RoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: RoleFilter | undefined;

  @Field(_type => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: ClientWhereInput[] | undefined;

  @Field(_type => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: ClientWhereInput[] | undefined;

  @Field(_type => [ClientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: ClientWhereInput[] | undefined;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: NullableStringFilter | undefined) {
    this.name = name;
  }

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFilter | undefined) {
    this.balance = balance;
  }

  @Field(_type => PostFilter, {
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
