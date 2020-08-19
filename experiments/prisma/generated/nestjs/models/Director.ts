import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Type as ClassTransformer__Type } from "class-transformer";
import { JsonValue, InputJsonValue } from "../../client";
import { Movie } from "../models/Movie";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Director {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  firstName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;

  movies?: Movie[] | undefined;
}
