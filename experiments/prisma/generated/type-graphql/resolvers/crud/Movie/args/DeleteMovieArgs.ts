import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";

@ArgsType()
export class DeleteMovieArgs {
  @Field(_type => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;
}
