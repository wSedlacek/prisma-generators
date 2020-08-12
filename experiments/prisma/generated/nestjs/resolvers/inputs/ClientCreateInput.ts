import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostCreateManyWithoutAuthorInput } from "../inputs/PostCreateManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateInput {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  name?: string | undefined;

  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  balance!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @Field(() => Role, {
    nullable: false,
    description: undefined
  })
  role!: keyof typeof Role;

  posts?: PostCreateManyWithoutAuthorInput | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number) {
    this.balance = balance;
  }

  @ClassTransformer__Type(() => PostCreateManyWithoutAuthorInput)
  @Field(() => PostCreateManyWithoutAuthorInput, {
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
