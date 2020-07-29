import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Patient)
export class DeleteManyPatientResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPatient(@Context() ctx: any, @Args() args: DeleteManyPatientArgs): Promise<BatchPayload> {
    return ctx.prisma.patient.deleteMany(args);
  }
}
