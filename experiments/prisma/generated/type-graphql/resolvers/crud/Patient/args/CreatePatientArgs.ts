import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreatePatientArgs {
  @ClassTransformer__Type(() => PatientCreateInput)
  @Field(() => PatientCreateInput, { nullable: false })
  data!: PatientCreateInput;
}
