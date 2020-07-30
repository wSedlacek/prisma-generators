import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientOrderByInput } from "../../../inputs/PatientOrderByInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";
import { PatientDistinctFieldEnum } from "../../../../enums/PatientDistinctFieldEnum";

@ArgsType()
export class AggregatePatientArgs {
  @Type(() => PatientWhereInput)
  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;

  @Type(() => PatientOrderByInput)
  @Field(() => PatientOrderByInput, { nullable: true })
  orderBy?: PatientOrderByInput | undefined;

  @Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: true })
  cursor?: PatientWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [PatientDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PatientDistinctFieldEnum> | undefined;
}
