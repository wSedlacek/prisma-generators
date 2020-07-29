import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorCreateWithoutMoviesInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  firstName!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  lastName!: string;
}
