import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { FirstNameLastNameCompoundUniqueInput } from "../inputs/FirstNameLastNameCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereUniqueInput {
  @ClassTransformer__Type(() => FirstNameLastNameCompoundUniqueInput)
  @Field(() => FirstNameLastNameCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  firstName_lastName?: FirstNameLastNameCompoundUniqueInput | undefined;
}
