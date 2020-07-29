import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { Patient } from "../../../models/Patient";

@Resolver(_of => Patient)
export class FindManyPatientResolver {
  @Query(_returns => [Patient], {
    nullable: false,
    description: undefined
  })
  async patients(@Context() ctx: any, @Args() args: FindManyPatientArgs): Promise<Patient[]> {
    return ctx.prisma.patient.findMany(args);
  }
}
