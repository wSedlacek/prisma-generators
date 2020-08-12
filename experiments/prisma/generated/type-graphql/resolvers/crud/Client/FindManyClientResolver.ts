import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";

@Resolver(() => Client)
export class FindManyClientResolver {
  @Query(() => [Client], {
    nullable: false,
    description: undefined
  })
  async clients(@Context() ctx: any, @Args() args: FindManyClientArgs): Promise<Client[]> {
    return plainToClass(Client, await ctx.prisma.user.findMany(args) as [Client]);
  }
}
