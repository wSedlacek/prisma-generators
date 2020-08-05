import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  slug?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  number?: keyof typeof SortOrder | undefined;
}
