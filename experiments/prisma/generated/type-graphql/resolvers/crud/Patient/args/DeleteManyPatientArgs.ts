import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyPatientArgs {
  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;
}
