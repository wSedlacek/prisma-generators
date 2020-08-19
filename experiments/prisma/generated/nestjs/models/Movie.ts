import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Type as ClassTransformer__Type } from "class-transformer";
import { JsonValue, InputJsonValue } from "../../client";
import { Director } from "../models/Director";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Movie {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  directorFirstName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  directorLastName!: string;

  director?: Director;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;
}
