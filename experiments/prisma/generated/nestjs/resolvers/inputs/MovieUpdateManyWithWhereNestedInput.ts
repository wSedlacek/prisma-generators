import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyDataInput } from "../inputs/MovieUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateManyWithWhereNestedInput {
  @ClassTransformer__Type(() => MovieScalarWhereInput)
  @Field(() => MovieScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: MovieScalarWhereInput;

  @ClassTransformer__Type(() => MovieUpdateManyDataInput)
  @Field(() => MovieUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: MovieUpdateManyDataInput;
}
