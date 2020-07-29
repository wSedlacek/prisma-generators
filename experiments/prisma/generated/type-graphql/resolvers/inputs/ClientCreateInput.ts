import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostCreateManyWithoutAuthorInput } from "../inputs/PostCreateManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  name?: string | undefined;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @Field(_type => Role, {
    nullable: false,
    description: undefined
  })
  role!: keyof typeof Role;

  posts?: PostCreateManyWithoutAuthorInput | undefined;

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
    nullable: false,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number) {
    this.balance = balance;
  }

  @Field(_type => PostCreateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostCreateManyWithoutAuthorInput | undefined) {
    this.posts = posts;
  }
}
