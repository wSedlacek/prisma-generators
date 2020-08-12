import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpsertClientArgs } from "./args/UpsertClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class UpsertClientResolver {
  @Mutation(() => Client, {
    nullable: false,
    description: undefined
  })
  async upsertClient(@Context() ctx: any, @Args() args: UpsertClientArgs): Promise<Client> {
    return plainToClass(Client, await ctx.prisma.user.upsert(args) as Client);
  }
}
