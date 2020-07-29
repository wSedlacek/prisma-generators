import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertPatientArgs } from "./args/UpsertPatientArgs";
import { Patient } from "../../../models/Patient";

@Resolver(_of => Patient)
export class UpsertPatientResolver {
  @Mutation(_returns => Patient, {
    nullable: false,
    description: undefined
  })
  async upsertPatient(@Context() ctx: any, @Args() args: UpsertPatientArgs): Promise<Patient> {
    return ctx.prisma.patient.upsert(args);
  }
}
