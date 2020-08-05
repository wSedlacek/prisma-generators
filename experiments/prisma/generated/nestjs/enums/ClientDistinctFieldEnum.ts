import { registerEnumType } from "@nestjs/graphql";

export enum ClientDistinctFieldEnum {
  id = "id",
  email = "email",
  firstName = "name",
  age = "age",
  accountBalance = "balance",
  amount = "amount",
  role = "role"
}
registerEnumType(ClientDistinctFieldEnum, {
  name: "ClientDistinctFieldEnum",
  description: undefined,
});
