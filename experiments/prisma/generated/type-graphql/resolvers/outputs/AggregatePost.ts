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
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @Field(_type => PostAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: PostAvgAggregateOutputType | undefined;

  @Field(_type => PostSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: PostSumAggregateOutputType | undefined;

  @Field(_type => PostMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: PostMinAggregateOutputType | undefined;

  @Field(_type => PostMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: PostMaxAggregateOutputType | undefined;
}
