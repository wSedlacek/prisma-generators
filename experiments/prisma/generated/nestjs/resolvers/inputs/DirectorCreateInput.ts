import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
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

  @ClassTransformer__Type(() => MovieCreateManyWithoutDirectorInput)
  @Field(() => MovieCreateManyWithoutDirectorInput, {
    nullable: true,
    description: undefined
  })
  movies?: MovieCreateManyWithoutDirectorInput | undefined;
}
