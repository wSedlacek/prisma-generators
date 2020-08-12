import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";
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
