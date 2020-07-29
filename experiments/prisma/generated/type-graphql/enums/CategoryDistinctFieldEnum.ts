import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum CategoryDistinctFieldEnum {
  name = "name",
  slug = "slug",
  number = "number"
}
registerEnumType(CategoryDistinctFieldEnum, {
  name: "CategoryDistinctFieldEnum",
  description: undefined,
});
