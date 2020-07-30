import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteManyMovieArgs {
  @Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;
}
