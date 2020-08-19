import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class IntFilter {
  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  equals?: number | undefined;

  @Field(() => [Int], {
    nullable: true,
    description: undefined
  })
  in?: number[] | undefined;

  @Field(() => [Int], {
    nullable: true,
    description: undefined
  })
  notIn?: number[] | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  lt?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  lte?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  gt?: number | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  gte?: number | undefined;

  @ClassTransformer__Type(() => NestedIntFilter)
  @Field(() => NestedIntFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedIntFilter | undefined;
}
