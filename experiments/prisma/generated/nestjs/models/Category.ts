import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Type as ClassTransformer__Type } from "class-transformer";
import { JsonValue, InputJsonValue } from "../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Category {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  slug!: string;

  @Field(() => Int, {
    nullable: false,
    description: undefined,
  })
  number!: number;
}
