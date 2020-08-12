import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateWithoutDirectorInput {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  title!: string;
}
