import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Patient)
export class DeleteManyPatientResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPatient(@Context() ctx: any, @Args() args: DeleteManyPatientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.patient.deleteMany(args) as BatchPayload);
  }
}
