import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedStringFilter {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | null | undefined;

  @Field(() => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | null | undefined;

  @Field(() => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  contains?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  startsWith?: string | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  endsWith?: string | null | undefined;

  @ClassTransformer__Type(() => NestedStringFilter)
  @Field(() => NestedStringFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedStringFilter | null | undefined;
}
