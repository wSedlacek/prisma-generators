import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereInput {
  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PatientWhereInput[] | undefined;

  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PatientWhereInput[] | undefined;

  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PatientWhereInput[] | undefined;
}
