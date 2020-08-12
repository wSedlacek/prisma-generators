import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class CategoryMaxAggregateOutputType {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  number!: number;
}
