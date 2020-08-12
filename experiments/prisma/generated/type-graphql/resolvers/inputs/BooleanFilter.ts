import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanFilter {
  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  not?: boolean | undefined;
}
