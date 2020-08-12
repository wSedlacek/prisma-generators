import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieFilter {
  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: MovieWhereInput | undefined;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: MovieWhereInput | undefined;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: MovieWhereInput | undefined;
}
