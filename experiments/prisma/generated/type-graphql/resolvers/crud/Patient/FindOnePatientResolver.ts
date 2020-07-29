import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOnePatientArgs } from "./args/FindOnePatientArgs";
import { Patient } from "../../../models/Patient";

@Resolver(_of => Patient)
export class FindOnePatientResolver {
  @Query(_returns => Patient, {
    nullable: true,
    description: undefined
  })
  async patient(@Context() ctx: any, @Args() args: FindOnePatientArgs): Promise<Patient | undefined> {
    return ctx.prisma.patient.findOne(args);
  }
}
