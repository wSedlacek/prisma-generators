import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieFilter } from "../inputs/MovieFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | undefined;

  @Field(_type => MovieFilter, {
    nullable: true,
    description: undefined
  })
  movies?: MovieFilter | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: DirectorWhereInput[] | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: DirectorWhereInput[] | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: DirectorWhereInput[] | undefined;
}
