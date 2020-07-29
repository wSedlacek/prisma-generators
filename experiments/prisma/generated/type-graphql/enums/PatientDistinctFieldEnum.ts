import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum PatientDistinctFieldEnum {
  firstName = "firstName",
  lastName = "lastName",
  email = "email"
}
registerEnumType(PatientDistinctFieldEnum, {
  name: "PatientDistinctFieldEnum",
  description: undefined,
});
