import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteClientArgs } from "./args/DeleteClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class DeleteClientResolver {
  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async deleteClient(@Context() ctx: any, @Args() args: DeleteClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.delete(args) as Client);
  }
}
