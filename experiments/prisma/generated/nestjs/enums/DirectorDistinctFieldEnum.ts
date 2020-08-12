import { registerEnumType } from "@nestjs/graphql";

export enum DirectorDistinctFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
registerEnumType(DirectorDistinctFieldEnum, {
  name: "DirectorDistinctFieldEnum",
  description: undefined,
});
