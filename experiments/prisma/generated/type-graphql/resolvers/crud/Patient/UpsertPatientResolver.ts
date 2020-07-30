import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertPatientArgs } from "./args/UpsertPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Patient)
export class UpsertPatientResolver {
  @Mutation(() => Patient, {
    nullable: false,
    description: undefined
  })
  async upsertPatient(@Context() ctx: any, @Args() args: UpsertPatientArgs): Promise<Patient> {
    return plainToClass(Patient, await ctx.prisma.patient.upsert(args) as Patient);
  }
}
