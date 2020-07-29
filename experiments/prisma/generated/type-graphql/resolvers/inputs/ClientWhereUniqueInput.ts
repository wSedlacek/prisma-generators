import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | undefined;
}
