import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedDateTimeFilter {
  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  equals?: Date | null | undefined;

  @Field(() => [Date], {
    nullable: true,
    description: undefined
  })
  in?: Date[] | null | undefined;

  @Field(() => [Date], {
    nullable: true,
    description: undefined
  })
  notIn?: Date[] | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  lt?: Date | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  lte?: Date | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  gt?: Date | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  gte?: Date | null | undefined;

  @ClassTransformer__Type(() => NestedDateTimeFilter)
  @Field(() => NestedDateTimeFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedDateTimeFilter | null | undefined;
}
