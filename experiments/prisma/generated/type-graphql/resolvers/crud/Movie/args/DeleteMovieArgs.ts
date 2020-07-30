import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteMovieArgs {
  @Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;
}
