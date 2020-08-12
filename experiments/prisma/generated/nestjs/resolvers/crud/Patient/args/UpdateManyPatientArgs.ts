import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientUpdateManyMutationInput } from "../../../inputs/PatientUpdateManyMutationInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyPatientArgs {
  @ClassTransformer__Type(() => PatientUpdateManyMutationInput)
  @Field(() => PatientUpdateManyMutationInput, { nullable: false })
  data!: PatientUpdateManyMutationInput;

  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;
}
