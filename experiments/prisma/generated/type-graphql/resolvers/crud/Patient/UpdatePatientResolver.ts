import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdatePatientArgs } from "./args/UpdatePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Patient)
export class UpdatePatientResolver {
  @Mutation(() => Patient, {
    nullable: true,
    description: undefined
  })
  async updatePatient(@Context() ctx: any, @Args() args: UpdatePatientArgs): Promise<Patient | undefined> {
    return plainToClass(Patient, await ctx.prisma.patient.update(args) as Patient);
  }
}