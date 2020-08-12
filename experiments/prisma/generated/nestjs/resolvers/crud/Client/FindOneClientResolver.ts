import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOneClientArgs } from "./args/FindOneClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class FindOneClientResolver {
  @Query(() => Client, {
    nullable: true,
    description: undefined
  })
  async client(@Context() ctx: any, @Args() args: FindOneClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.findOne(args) as Client);
  }
}
