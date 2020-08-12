import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";

@Resolver(() => Patient)
export class FindManyPatientResolver {
  @Query(() => [Patient], {
    nullable: false,
    description: undefined
  })
  async patients(@Context() ctx: any, @Args() args: FindManyPatientArgs): Promise<Patient[]> {
    return plainToClass(Patient, await ctx.prisma.patient.findMany(args) as [Patient]);
  }
}
