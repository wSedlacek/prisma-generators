import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  name?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  slug?: string | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  number?: number | undefined;
}
