import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
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
  @Field(() => Int, {
    nullable: false,
    description: "User model field doc",
  })
  id!: number;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  /** renamed field doc */
  name?: string | undefined;

  @Field(() => Int, {
    nullable: false,
    description: undefined,
  })
  age!: number;

  balance!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined,
  })
  amount!: number;

  posts?: Post[] | undefined;

  @Field(() => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;

  /** renamed field doc */
  @Field(() => String, {
    nullable: true,
    description: "renamed field doc",
  })
  get firstName(): string | undefined {
    return this.name;
  }

  @Field(() => Float, {
    nullable: false,
    description: undefined,
  })
  get accountBalance(): number {
    return this.balance;
  }
}
