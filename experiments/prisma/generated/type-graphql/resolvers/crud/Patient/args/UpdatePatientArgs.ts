import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdatePatientArgs {
  @ClassTransformer__Type(() => PatientUpdateInput)
  @Field(() => PatientUpdateInput, { nullable: false })
  data!: PatientUpdateInput;

  @ClassTransformer__Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;
}
