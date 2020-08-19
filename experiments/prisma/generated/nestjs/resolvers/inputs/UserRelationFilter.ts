import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserRelationFilter {
  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: ClientWhereInput | undefined;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: ClientWhereInput | undefined;
}
