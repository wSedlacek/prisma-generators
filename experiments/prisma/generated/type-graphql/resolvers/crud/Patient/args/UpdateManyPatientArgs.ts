import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUpdateManyMutationInput } from "../../../inputs/PatientUpdateManyMutationInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";

@ArgsType()
export class UpdateManyPatientArgs {
  @Field(() => PatientUpdateManyMutationInput, { nullable: false })
  data!: PatientUpdateManyMutationInput;

  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;
}
