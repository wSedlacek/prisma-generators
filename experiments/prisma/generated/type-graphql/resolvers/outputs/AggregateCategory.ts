import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CategoryAvgAggregateOutputType } from "../outputs/CategoryAvgAggregateOutputType";
import { CategoryMaxAggregateOutputType } from "../outputs/CategoryMaxAggregateOutputType";
import { CategoryMinAggregateOutputType } from "../outputs/CategoryMinAggregateOutputType";
import { CategorySumAggregateOutputType } from "../outputs/CategorySumAggregateOutputType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCategory {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @Field(_type => CategoryAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: CategoryAvgAggregateOutputType | undefined;

  @Field(_type => CategorySumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: CategorySumAggregateOutputType | undefined;

  @Field(_type => CategoryMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: CategoryMinAggregateOutputType | undefined;

  @Field(_type => CategoryMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: CategoryMaxAggregateOutputType | undefined;
}
