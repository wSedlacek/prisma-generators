import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOnePatientArgs } from "./args/FindOnePatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";

@Resolver(() => Patient)
export class FindOnePatientResolver {
  @Query(() => Patient, {
    nullable: true,
    description: undefined
  })
  async patient(@Context() ctx: any, @Args() args: FindOnePatientArgs): Promise<Patient | undefined> {
    return plainToClass(Patient, await ctx.prisma.patient.findOne(args) as Patient);
  }
}
