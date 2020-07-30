import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteManyPatientArgs {
  @Type(() => PatientWhereInput)
  @Field(() => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;
}
