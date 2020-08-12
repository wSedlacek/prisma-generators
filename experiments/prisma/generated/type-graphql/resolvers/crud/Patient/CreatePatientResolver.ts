import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { CreatePatientArgs } from "./args/CreatePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";

@Resolver(() => Patient)
export class CreatePatientResolver {
  @Mutation(() => Patient, {
    nullable: false,
    description: undefined
  })
  async createPatient(@Context() ctx: any, @Args() args: CreatePatientArgs): Promise<Patient> {
    return plainToClass(Patient, await ctx.prisma.patient.create(args) as Patient);
  }
}
