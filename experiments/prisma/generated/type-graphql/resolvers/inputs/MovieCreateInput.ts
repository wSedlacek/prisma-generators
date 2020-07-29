import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateOneWithoutMoviesInput } from "../inputs/DirectorCreateOneWithoutMoviesInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(_type => DirectorCreateOneWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  director!: DirectorCreateOneWithoutMoviesInput;
}
