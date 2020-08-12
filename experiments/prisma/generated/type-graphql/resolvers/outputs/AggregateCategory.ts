import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { CategoryAvgAggregateOutputType } from "../outputs/CategoryAvgAggregateOutputType";
import { CategoryMaxAggregateOutputType } from "../outputs/CategoryMaxAggregateOutputType";
import { CategoryMinAggregateOutputType } from "../outputs/CategoryMinAggregateOutputType";
import { CategorySumAggregateOutputType } from "../outputs/CategorySumAggregateOutputType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCategory {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @ClassTransformer__Type(() => CategoryAvgAggregateOutputType)
  @Field(() => CategoryAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: CategoryAvgAggregateOutputType | undefined;

  @ClassTransformer__Type(() => CategorySumAggregateOutputType)
  @Field(() => CategorySumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: CategorySumAggregateOutputType | undefined;

  @ClassTransformer__Type(() => CategoryMinAggregateOutputType)
  @Field(() => CategoryMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: CategoryMinAggregateOutputType | undefined;

  @ClassTransformer__Type(() => CategoryMaxAggregateOutputType)
  @Field(() => CategoryMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: CategoryMaxAggregateOutputType | undefined;
}
