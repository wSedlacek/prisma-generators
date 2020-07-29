import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { Client } from "../../../models/Client";

@Resolver(() => Client)
export class UpdateClientResolver {
  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async updateClient(@Context() ctx: any, @Args() args: UpdateClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.update(args);
  }
}
