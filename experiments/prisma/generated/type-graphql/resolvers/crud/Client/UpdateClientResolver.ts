import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass, Type } from "class-transformer";

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
