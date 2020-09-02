import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserRelationFilter {
  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: UserWhereInput | null | undefined;

  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: UserWhereInput | null | undefined;
}
