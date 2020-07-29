import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum DirectorDistinctFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
registerEnumType(DirectorDistinctFieldEnum, {
  name: "DirectorDistinctFieldEnum",
  description: undefined,
});
