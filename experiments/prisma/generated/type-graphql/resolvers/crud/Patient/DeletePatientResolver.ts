import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeletePatientArgs } from "./args/DeletePatientArgs";
import { Patient } from "../../../models/Patient";

@Resolver(() => Patient)
export class DeletePatientResolver {
  @Mutation(() => Patient, {
    nullable: true,
    description: undefined
  })
  async deletePatient(@Context() ctx: any, @Args() args: DeletePatientArgs): Promise<Patient | undefined> {
    return ctx.prisma.patient.delete(args);
  }
}
