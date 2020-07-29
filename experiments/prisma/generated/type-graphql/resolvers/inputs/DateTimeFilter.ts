import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFilter {
  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  equals?: Date | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  not?: Date | undefined;

  @Field(() => [Date], {
    nullable: true,
    description: undefined
  })
  in?: Date[] | undefined;

  @Field(() => [Date], {
    nullable: true,
    description: undefined
  })
  notIn?: Date[] | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  lt?: Date | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  lte?: Date | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  gt?: Date | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  gte?: Date | undefined;
}
