import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { MovieCreateManyWithoutDirectorInput } from "../inputs/MovieCreateManyWithoutDirectorInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorCreateInput {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  firstName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  lastName!: string;

  @Type(() => MovieCreateManyWithoutDirectorInput)
  @Field(() => MovieCreateManyWithoutDirectorInput, {
    nullable: true,
    description: undefined
  })
  movies?: MovieCreateManyWithoutDirectorInput | undefined;
}
