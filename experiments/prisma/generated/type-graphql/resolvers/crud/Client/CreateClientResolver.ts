import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateClientArgs } from "./args/CreateClientArgs";
import { Client } from "../../../models/Client";

@Resolver(() => Client)
export class CreateClientResolver {
  @Mutation(() => Client, {
    nullable: false,
    description: undefined
  })
  async createClient(@Context() ctx: any, @Args() args: CreateClientArgs): Promise<Client> {
    return ctx.prisma.user.create(args);
  }
}
