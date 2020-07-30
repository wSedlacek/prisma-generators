import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";
import { PatientUpdateInput } from "../../../inputs/PatientUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpsertPatientArgs {
  @Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;

  @Type(() => PatientCreateInput)
  @Field(() => PatientCreateInput, { nullable: false })
  create!: PatientCreateInput;

  @Type(() => PatientUpdateInput)
  @Field(() => PatientUpdateInput, { nullable: false })
  update!: PatientUpdateInput;
}
