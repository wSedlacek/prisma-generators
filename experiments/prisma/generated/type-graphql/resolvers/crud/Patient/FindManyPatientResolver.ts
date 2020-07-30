import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Patient)
export class FindManyPatientResolver {
  @Query(() => [Patient], {
    nullable: false,
    description: undefined
  })
  async patients(@Context() ctx: any, @Args() args: FindManyPatientArgs): Promise<Patient[]> {
    return plainToClass(Patient, await ctx.prisma.patient.findMany(args) as Patient[]);
  }
}
