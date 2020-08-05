import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PatientOrderByInput } from "../../../inputs/PatientOrderByInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PatientDistinctFieldEnum } from "../../../../enums/PatientDistinctFieldEnum";

@ArgsType()
export class AggregatePatientArgs {
  @ClassTransformer__Type(() => PatientWhereInput)
  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;

  @ClassTransformer__Type(() => PatientOrderByInput)
  @Field(() => [PatientOrderByInput], { nullable: true })
  orderBy?: PatientOrderByInput[] | undefined;

  @ClassTransformer__Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: true })
  cursor?: PatientWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [PatientDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PatientDistinctFieldEnum> | undefined;
}
