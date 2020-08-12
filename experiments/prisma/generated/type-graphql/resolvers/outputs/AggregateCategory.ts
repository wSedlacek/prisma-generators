import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
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

  @Type(() => CategoryAvgAggregateOutputType)
  @Field(() => CategoryAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: CategoryAvgAggregateOutputType | undefined;

  @Type(() => CategorySumAggregateOutputType)
  @Field(() => CategorySumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: CategorySumAggregateOutputType | undefined;

  @Type(() => CategoryMinAggregateOutputType)
  @Field(() => CategoryMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: CategoryMinAggregateOutputType | undefined;

  @Type(() => CategoryMaxAggregateOutputType)
  @Field(() => CategoryMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: CategoryMaxAggregateOutputType | undefined;
}