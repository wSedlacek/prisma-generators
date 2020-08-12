import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeletePatientArgs } from "./args/DeletePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";

@Resolver(() => Patient)
export class DeletePatientResolver {
  @Mutation(() => Patient, {
    nullable: true,
    description: undefined
  })
  async deletePatient(@Context() ctx: any, @Args() args: DeletePatientArgs): Promise<Patient | undefined> {
    return plainToClass(Patient, await ctx.prisma.patient.delete(args) as Patient);
  }
}
