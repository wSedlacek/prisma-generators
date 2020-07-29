import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateOrConnectWithoutDirectorInput {
  @Field(_type => MovieWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: MovieWhereUniqueInput;

  @Field(_type => MovieCreateWithoutDirectorInput, {
    nullable: false,
    description: undefined
  })
  create!: MovieCreateWithoutDirectorInput;
}
