import { registerEnumType } from "@nestjs/graphql";

export enum PatientDistinctFieldEnum {
  firstName = "firstName",
  lastName = "lastName",
  email = "email"
}
registerEnumType(PatientDistinctFieldEnum, {
  name: "PatientDistinctFieldEnum",
  description: undefined,
});
