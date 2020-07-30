import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Client)
export class DeleteManyClientResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyClient(@Context() ctx: any, @Args() args: DeleteManyClientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.deleteMany(args) as BatchPayload);
  }
}
