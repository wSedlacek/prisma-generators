import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { CreateClientArgs } from "./args/CreateClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class CreateClientResolver {
  @Mutation(() => Client, {
    nullable: false,
    description: undefined
  })
  async createClient(@Context() ctx: any, @Args() args: CreateClientArgs): Promise<Client> {
    return plainToClass(Client, await ctx.prisma.user.create(args) as Client);
  }
}
