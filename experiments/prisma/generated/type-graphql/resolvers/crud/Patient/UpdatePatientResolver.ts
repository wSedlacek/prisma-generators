import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdatePatientArgs } from "./args/UpdatePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";

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
