import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpsertMovieArgs {
  @Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;

  @Type(() => MovieCreateInput)
  @Field(() => MovieCreateInput, { nullable: false })
  create!: MovieCreateInput;

  @Type(() => MovieUpdateInput)
  @Field(() => MovieUpdateInput, { nullable: false })
  update!: MovieUpdateInput;
}
