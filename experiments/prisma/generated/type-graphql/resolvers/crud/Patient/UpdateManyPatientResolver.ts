import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyPatientArgs } from "./args/UpdateManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Patient)
export class UpdateManyPatientResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPatient(@Context() ctx: any, @Args() args: UpdateManyPatientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.patient.updateMany(args) as BatchPayload);
  }
}