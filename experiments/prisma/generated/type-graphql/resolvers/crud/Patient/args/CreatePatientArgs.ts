import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";

@ArgsType()
export class CreatePatientArgs {
  @Field(() => PatientCreateInput, { nullable: false })
  data!: PatientCreateInput;
}
