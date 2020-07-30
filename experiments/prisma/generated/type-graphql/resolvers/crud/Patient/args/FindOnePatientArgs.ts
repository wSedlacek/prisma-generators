import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class FindOnePatientArgs {
  @Type(() => PatientWhereUniqueInput)
  @Field(() => PatientWhereUniqueInput, { nullable: false })
  where!: PatientWhereUniqueInput;
}
