import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | undefined;

  name?: string | undefined;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  age?: number | undefined;

  balance?: number | undefined;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | undefined;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | undefined;

  posts?: PostUpdateManyWithoutAuthorInput | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number | undefined) {
    this.balance = balance;
  }

  @Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostUpdateManyWithoutAuthorInput | undefined) {
    this.posts = posts;
  }
}
