import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonFilter {
  @Field(_type => GraphQLJSON, {
    nullable: true,
    description: undefined
  })
  equals?: InputJsonValue | undefined;

  @Field(_type => GraphQLJSON, {
    nullable: true,
    description: undefined
  })
  not?: InputJsonValue | undefined;
}
