import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertClientArgs } from "./args/UpsertClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass, Type } from "class-transformer";

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
