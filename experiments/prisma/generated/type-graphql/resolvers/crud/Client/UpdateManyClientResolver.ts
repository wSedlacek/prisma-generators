import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyClientArgs } from "./args/UpdateManyClientArgs";
import { Client } from "../../../models/Client";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Client)
export class UpdateManyClientResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyClient(@Context() ctx: any, @Args() args: UpdateManyClientArgs): Promise<BatchPayload> {
    return ctx.prisma.user.updateMany(args);
  }
}
