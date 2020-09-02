import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedBoolFilter {
  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | null | undefined;

  @ClassTransformer__Type(() => NestedBoolFilter)
  @Field(() => NestedBoolFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedBoolFilter | null | undefined;
}
