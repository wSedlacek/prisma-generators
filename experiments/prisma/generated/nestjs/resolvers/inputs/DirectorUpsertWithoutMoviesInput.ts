import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesDataInput } from "../inputs/DirectorUpdateWithoutMoviesDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpsertWithoutMoviesInput {
  @ClassTransformer__Type(() => DirectorUpdateWithoutMoviesDataInput)
  @Field(() => DirectorUpdateWithoutMoviesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: DirectorUpdateWithoutMoviesDataInput;

  @ClassTransformer__Type(() => DirectorCreateWithoutMoviesInput)
  @Field(() => DirectorCreateWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  create!: DirectorCreateWithoutMoviesInput;
}
