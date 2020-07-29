import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieScalarWhereInput {
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorLastName?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: MovieScalarWhereInput[] | undefined;

  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: MovieScalarWhereInput[] | undefined;

  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: MovieScalarWhereInput[] | undefined;
}
