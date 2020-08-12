import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class ClientMaxAggregateOutputType {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  id!: number;

  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @Field(() => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;
}
