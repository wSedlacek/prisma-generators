import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedFloatFilter {
  @Field(() => Float, {
    nullable: true,
    description: undefined
  })
  equals?: number | undefined;

  @Field(() => [Float], {
    nullable: true,
    description: undefined
  })
  in?: number[] | undefined;

  @Field(() => [Float], {
    nullable: true,
    description: undefined
  })
  notIn?: number[] | undefined;

  @Field(() => Float, {
    nullable: true,
    description: undefined
  })
  lt?: number | undefined;

  @Field(() => Float, {
    nullable: true,
    description: undefined
  })
  lte?: number | undefined;

  @Field(() => Float, {
    nullable: true,
    description: undefined
  })
  gt?: number | undefined;

  @Field(() => Float, {
    nullable: true,
    description: undefined
  })
  gte?: number | undefined;

  @ClassTransformer__Type(() => NestedFloatFilter)
  @Field(() => NestedFloatFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedFloatFilter | undefined;
}
