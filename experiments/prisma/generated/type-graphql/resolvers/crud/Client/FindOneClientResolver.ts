import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneClientArgs } from "./args/FindOneClientArgs";
import { Client } from "../../../models/Client";

@Resolver(_of => Client)
export class FindOneClientResolver {
  @Query(_returns => Client, {
    nullable: true,
    description: undefined
  })
  async client(@Context() ctx: any, @Args() args: FindOneClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.findOne(args);
  }
}
