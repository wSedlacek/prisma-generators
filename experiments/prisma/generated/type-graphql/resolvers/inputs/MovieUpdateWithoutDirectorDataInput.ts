import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateWithoutDirectorDataInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  title?: string | undefined;
}
