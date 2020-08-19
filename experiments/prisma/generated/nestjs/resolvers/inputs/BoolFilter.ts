import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class BoolFilter {
  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | undefined;

  @ClassTransformer__Type(() => NestedBoolFilter)
  @Field(() => NestedBoolFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedBoolFilter | undefined;
}
