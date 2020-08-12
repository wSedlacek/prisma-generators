import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  slug?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  number?: keyof typeof OrderByArg | undefined;
}
