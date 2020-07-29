import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientOrderByInput } from "../../../inputs/PatientOrderByInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { PatientDistinctFieldEnum } from "../../../../enums/PatientDistinctFieldEnum";

@ArgsType()
export class FindManyPatientArgs {
  @Field(_type => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;

  @Field(_type => PatientOrderByInput, { nullable: true })
  orderBy?: PatientOrderByInput | undefined;

  @Field(_type => PatientWhereUniqueInput, { nullable: true })
  cursor?: PatientWhereUniqueInput | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [PatientDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PatientDistinctFieldEnum> | undefined;
}
