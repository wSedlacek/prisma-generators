import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@ArgsType()
export class FindOnePatientArgs {
  @Field(_type => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;
}
