import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";
import { Post } from "../models/Post";
import { Role } from "../enums/Role";

/** User model doc */
@ObjectType({
  isAbstract: true,
  description: "User model doc",
})
export class Client {
  /** User model field doc */
  @Field(_type => Int, {
    nullable: false,
    description: "User model field doc",
  })
  id!: number;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  /** renamed field doc */
  name?: string | undefined;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  age!: number;

  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined,
  })
  amount!: number;

  posts?: Post[] | undefined;

  @Field(_type => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;

  /** renamed field doc */
  @Field(_type => String, {
    nullable: true,
    description: "renamed field doc",
  })
  get firstName(): string | undefined {
    return this.name;
  }

  @Field(_type => Float, {
    nullable: false,
    description: undefined,
  })
  get accountBalance(): number {
    return this.balance;
  }
}
