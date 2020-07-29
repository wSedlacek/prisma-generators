import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieUpdateManyWithoutDirectorInput } from "../inputs/MovieUpdateManyWithoutDirectorInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  firstName?: string | undefined;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | undefined;

  @Field(_type => MovieUpdateManyWithoutDirectorInput, {
    nullable: true,
    description: undefined
  })
  movies?: MovieUpdateManyWithoutDirectorInput | undefined;
}
