import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";

@ArgsType()
export class UpsertMovieArgs {
  @Field(_type => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;

  @Field(_type => MovieCreateInput, { nullable: false })
  create!: MovieCreateInput;

  @Field(_type => MovieUpdateInput, { nullable: false })
  update!: MovieUpdateInput;
}
