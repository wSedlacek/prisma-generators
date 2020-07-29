import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum UserDistinctFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  age = "age",
  balance = "balance",
  amount = "amount",
  role = "role"
}
registerEnumType(UserDistinctFieldEnum, {
  name: "UserDistinctFieldEnum",
  description: undefined,
});
