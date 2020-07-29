import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
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

  @Field(() => PostAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: PostAvgAggregateOutputType | undefined;

  @Field(() => PostSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: PostSumAggregateOutputType | undefined;

  @Field(() => PostMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: PostMinAggregateOutputType | undefined;

  @Field(() => PostMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: PostMaxAggregateOutputType | undefined;
}
