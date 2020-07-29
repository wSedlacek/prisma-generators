import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum OrderByArg {
  asc = "asc",
  desc = "desc"
}
registerEnumType(OrderByArg, {
  name: "OrderByArg",
  description: undefined,
});
