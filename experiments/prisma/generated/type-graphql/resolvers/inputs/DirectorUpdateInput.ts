import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { MovieUpdateManyWithoutDirectorInput } from "../inputs/MovieUpdateManyWithoutDirectorInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpdateInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  firstName?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | undefined;

  @Type(() => MovieUpdateManyWithoutDirectorInput)
  @Field(() => MovieUpdateManyWithoutDirectorInput, {
    nullable: true,
    description: undefined
  })
  movies?: MovieUpdateManyWithoutDirectorInput | undefined;
}
