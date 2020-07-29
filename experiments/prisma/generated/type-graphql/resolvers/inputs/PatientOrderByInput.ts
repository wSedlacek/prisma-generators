import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientOrderByInput {
  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  firstName?: keyof typeof OrderByArg | undefined;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  lastName?: keyof typeof OrderByArg | undefined;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof OrderByArg | undefined;
}
