import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertPatientArgs {
  @ClassTransformer__Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;

  @ClassTransformer__Type(() => PatientCreateInput)
  @Field(() => PatientCreateInput, { nullable: false })
  create!: PatientCreateInput;

  @ClassTransformer__Type(() => PatientUpdateInput)
  @Field(() => PatientUpdateInput, { nullable: false })
  update!: PatientUpdateInput;
}
