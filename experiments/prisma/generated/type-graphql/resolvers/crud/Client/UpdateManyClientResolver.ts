import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyClientArgs } from "./args/UpdateManyClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Client)
export class UpdateManyClientResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyClient(@Context() ctx: any, @Args() args: UpdateManyClientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.updateMany(args) as BatchPayload);
  }
}
