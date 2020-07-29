import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreatePatientArgs } from "./args/CreatePatientArgs";
import { Patient } from "../../../models/Patient";

@Resolver(() => Patient)
export class CreatePatientResolver {
  @Mutation(() => Patient, {
    nullable: false,
    description: undefined
  })
  async createPatient(@Context() ctx: any, @Args() args: CreatePatientArgs): Promise<Patient> {
    return ctx.prisma.patient.create(args);
  }
}
