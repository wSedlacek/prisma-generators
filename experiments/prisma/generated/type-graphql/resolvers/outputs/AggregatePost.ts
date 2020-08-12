import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostAvgAggregateOutputType } from "../outputs/PostAvgAggregateOutputType";
import { PostMaxAggregateOutputType } from "../outputs/PostMaxAggregateOutputType";
import { PostMinAggregateOutputType } from "../outputs/PostMinAggregateOutputType";
import { PostSumAggregateOutputType } from "../outputs/PostSumAggregateOutputType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePost {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @ClassTransformer__Type(() => PostAvgAggregateOutputType)
  @Field(() => PostAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: PostAvgAggregateOutputType | undefined;

  @ClassTransformer__Type(() => PostSumAggregateOutputType)
  @Field(() => PostSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: PostSumAggregateOutputType | undefined;

  @ClassTransformer__Type(() => PostMinAggregateOutputType)
  @Field(() => PostMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: PostMinAggregateOutputType | undefined;

  @ClassTransformer__Type(() => PostMaxAggregateOutputType)
  @Field(() => PostMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: PostMaxAggregateOutputType | undefined;
}
