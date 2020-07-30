import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
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

  @Type(() => PostAvgAggregateOutputType)
  @Field(() => PostAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: PostAvgAggregateOutputType | undefined;

  @Type(() => PostSumAggregateOutputType)
  @Field(() => PostSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: PostSumAggregateOutputType | undefined;

  @Type(() => PostMinAggregateOutputType)
  @Field(() => PostMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: PostMinAggregateOutputType | undefined;

  @Type(() => PostMaxAggregateOutputType)
  @Field(() => PostMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: PostMaxAggregateOutputType | undefined;
}
