import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorCreateOrConnectWithoutMovieInput {
  @Field(_type => DirectorWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: DirectorWhereUniqueInput;

  @Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  create!: DirectorCreateWithoutMoviesInput;
}
