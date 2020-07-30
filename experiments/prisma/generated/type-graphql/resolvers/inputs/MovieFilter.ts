import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieFilter {
  @Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: MovieWhereInput | undefined;

  @Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: MovieWhereInput | undefined;

  @Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: MovieWhereInput | undefined;
}
