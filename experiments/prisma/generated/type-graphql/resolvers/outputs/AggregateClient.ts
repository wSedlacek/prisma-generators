import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientAvgAggregateOutputType } from "../outputs/ClientAvgAggregateOutputType";
import { ClientMaxAggregateOutputType } from "../outputs/ClientMaxAggregateOutputType";
import { ClientMinAggregateOutputType } from "../outputs/ClientMinAggregateOutputType";
import { ClientSumAggregateOutputType } from "../outputs/ClientSumAggregateOutputType";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateClient {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @Field(_type => ClientAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: ClientAvgAggregateOutputType | undefined;

  @Field(_type => ClientSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: ClientSumAggregateOutputType | undefined;

  @Field(_type => ClientMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: ClientMinAggregateOutputType | undefined;

  @Field(_type => ClientMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: ClientMaxAggregateOutputType | undefined;
}
