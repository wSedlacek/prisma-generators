import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof SortOrder | undefined;

  name?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  age?: keyof typeof SortOrder | undefined;

  balance?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  amount?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: keyof typeof SortOrder | undefined) {
    this.name = name;
  }

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: keyof typeof SortOrder | undefined) {
    this.balance = balance;
  }
}
