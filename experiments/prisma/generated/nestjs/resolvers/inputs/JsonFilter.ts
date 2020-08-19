import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonFilter {
  @Field(() => GraphQLJSON, {
    nullable: true,
    description: undefined
  })
  equals?: InputJsonValue | undefined;

  @ClassTransformer__Type(() => NestedJsonFilter)
  @Field(() => NestedJsonFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedJsonFilter | undefined;
}
