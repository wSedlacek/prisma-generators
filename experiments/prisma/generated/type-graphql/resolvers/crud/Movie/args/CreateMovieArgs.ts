import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class CreateMovieArgs {
  @Type(() => MovieCreateInput)
  @Field(() => MovieCreateInput, { nullable: false })
  data!: MovieCreateInput;
}
