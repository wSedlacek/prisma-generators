import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyDataInput } from "../inputs/MovieUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateManyWithWhereNestedInput {
  @Field(_type => MovieScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: MovieScalarWhereInput;

  @Field(_type => MovieUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: MovieUpdateManyDataInput;
}
