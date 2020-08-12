import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorCreateOneWithoutMoviesInput } from "../inputs/DirectorCreateOneWithoutMoviesInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateInput {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @ClassTransformer__Type(() => DirectorCreateOneWithoutMoviesInput)
  @Field(() => DirectorCreateOneWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  director!: DirectorCreateOneWithoutMoviesInput;
}
