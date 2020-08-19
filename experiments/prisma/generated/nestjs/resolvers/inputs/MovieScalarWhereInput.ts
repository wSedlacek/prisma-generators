import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieScalarWhereInput {
  @ClassTransformer__Type(() => MovieScalarWhereInput)
  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: MovieScalarWhereInput[] | undefined;

  @ClassTransformer__Type(() => MovieScalarWhereInput)
  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: MovieScalarWhereInput[] | undefined;

  @ClassTransformer__Type(() => MovieScalarWhereInput)
  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: MovieScalarWhereInput[] | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorLastName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;
}
