import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  firstName?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  lastName?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof SortOrder | undefined;
}
