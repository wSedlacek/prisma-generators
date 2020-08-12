import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

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
