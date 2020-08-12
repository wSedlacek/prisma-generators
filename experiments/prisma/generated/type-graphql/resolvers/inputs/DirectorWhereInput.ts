import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieFilter } from "../inputs/MovieFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorWhereInput {
  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | undefined;

  @ClassTransformer__Type(() => MovieFilter)
  @Field(() => MovieFilter, {
    nullable: true,
    description: undefined
  })
  movies?: MovieFilter | undefined;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: DirectorWhereInput[] | undefined;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: DirectorWhereInput[] | undefined;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => [DirectorWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: DirectorWhereInput[] | undefined;
}
