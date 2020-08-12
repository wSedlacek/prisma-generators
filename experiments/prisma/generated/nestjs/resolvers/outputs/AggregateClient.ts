import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { ClientAvgAggregateOutputType } from "../outputs/ClientAvgAggregateOutputType";
import { ClientMaxAggregateOutputType } from "../outputs/ClientMaxAggregateOutputType";
import { ClientMinAggregateOutputType } from "../outputs/ClientMinAggregateOutputType";
import { ClientSumAggregateOutputType } from "../outputs/ClientSumAggregateOutputType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateClient {
  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @ClassTransformer__Type(() => ClientAvgAggregateOutputType)
  @Field(() => ClientAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: ClientAvgAggregateOutputType | undefined;

  @ClassTransformer__Type(() => ClientSumAggregateOutputType)
  @Field(() => ClientSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: ClientSumAggregateOutputType | undefined;

  @ClassTransformer__Type(() => ClientMinAggregateOutputType)
  @Field(() => ClientMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: ClientMinAggregateOutputType | undefined;

  @ClassTransformer__Type(() => ClientMaxAggregateOutputType)
  @Field(() => ClientMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: ClientMaxAggregateOutputType | undefined;
}
