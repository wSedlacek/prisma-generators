import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { plainToClass } from "class-transformer";
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
