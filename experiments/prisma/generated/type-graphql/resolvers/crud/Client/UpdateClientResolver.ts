import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class UpdateClientResolver {
  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async updateClient(@Context() ctx: any, @Args() args: UpdateClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.update(args) as Client);
  }
}
