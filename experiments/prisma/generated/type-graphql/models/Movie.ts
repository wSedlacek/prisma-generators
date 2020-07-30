import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";
import { Director } from "../models/Director";
import { plainToClass, Type } from "class-transformer";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Movie {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  directorFirstName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  directorLastName!: string;

  director?: Director;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;
}
