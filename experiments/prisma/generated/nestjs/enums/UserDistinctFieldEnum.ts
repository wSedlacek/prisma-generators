import { registerEnumType } from "@nestjs/graphql";

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
