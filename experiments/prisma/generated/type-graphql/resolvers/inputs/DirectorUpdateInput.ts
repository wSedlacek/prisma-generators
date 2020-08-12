import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
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

  @ClassTransformer__Type(() => MovieUpdateManyWithoutDirectorInput)
  @Field(() => MovieUpdateManyWithoutDirectorInput, {
    nullable: true,
    description: undefined
  })
  movies?: MovieUpdateManyWithoutDirectorInput | undefined;
}
