import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@ArgsType()
export class UpdatePatientArgs {
  @Field(() => PatientUpdateInput, { nullable: false })
  data!: PatientUpdateInput;

  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;
}
