import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { Client } from "../../../models/Client";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Client)
export class DeleteManyClientResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyClient(@Context() ctx: any, @Args() args: DeleteManyClientArgs): Promise<BatchPayload> {
    return ctx.prisma.user.deleteMany(args);
  }
}
