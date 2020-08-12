import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieUpdateWithoutDirectorDataInput } from "../inputs/MovieUpdateWithoutDirectorDataInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateWithWhereUniqueWithoutDirectorInput {
  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: MovieWhereUniqueInput;

  @ClassTransformer__Type(() => MovieUpdateWithoutDirectorDataInput)
  @Field(() => MovieUpdateWithoutDirectorDataInput, {
    nullable: false,
    description: undefined
  })
  data!: MovieUpdateWithoutDirectorDataInput;
}
