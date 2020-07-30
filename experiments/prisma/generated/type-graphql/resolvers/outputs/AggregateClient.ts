import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
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

  @Type(() => ClientAvgAggregateOutputType)
  @Field(() => ClientAvgAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  avg?: ClientAvgAggregateOutputType | undefined;

  @Type(() => ClientSumAggregateOutputType)
  @Field(() => ClientSumAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  sum?: ClientSumAggregateOutputType | undefined;

  @Type(() => ClientMinAggregateOutputType)
  @Field(() => ClientMinAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  min?: ClientMinAggregateOutputType | undefined;

  @Type(() => ClientMaxAggregateOutputType)
  @Field(() => ClientMaxAggregateOutputType, {
    nullable: true,
    description: undefined
  })
  max?: ClientMaxAggregateOutputType | undefined;
}
