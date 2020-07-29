import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";
import { Movie } from "../models/Movie";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Director {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  firstName!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;

  movies?: Movie[] | undefined;
}
