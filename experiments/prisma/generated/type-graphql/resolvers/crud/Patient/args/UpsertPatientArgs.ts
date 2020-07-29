import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@ArgsType()
export class UpsertPatientArgs {
  @Field(_type => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;

  @Field(_type => PatientCreateInput, { nullable: false })
  create!: PatientCreateInput;

  @Field(_type => PatientUpdateInput, { nullable: false })
  update!: PatientUpdateInput;
}
