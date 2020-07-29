import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum MovieDistinctFieldEnum {
  directorFirstName = "directorFirstName",
  directorLastName = "directorLastName",
  title = "title"
}
registerEnumType(MovieDistinctFieldEnum, {
  name: "MovieDistinctFieldEnum",
  description: undefined,
});
