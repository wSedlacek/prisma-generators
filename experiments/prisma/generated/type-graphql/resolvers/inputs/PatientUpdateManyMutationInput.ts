import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientUpdateManyMutationInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  firstName?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  email?: string | undefined;
}
