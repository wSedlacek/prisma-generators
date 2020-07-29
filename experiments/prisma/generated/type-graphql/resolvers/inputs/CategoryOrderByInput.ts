import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  slug?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  number?: keyof typeof OrderByArg | undefined;
}
