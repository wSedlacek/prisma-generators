import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedEnumRoleFilter {
  @Field(() => Role, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Role | undefined;

  @Field(() => [Role], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Role> | undefined;

  @Field(() => [Role], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Role> | undefined;

  @ClassTransformer__Type(() => NestedEnumRoleFilter)
  @Field(() => NestedEnumRoleFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedEnumRoleFilter | undefined;
}
