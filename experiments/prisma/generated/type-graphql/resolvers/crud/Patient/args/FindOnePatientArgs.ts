import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class FindOnePatientArgs {
  @ClassTransformer__Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;
}
