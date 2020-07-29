import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { Client } from "../../../models/Client";

@Resolver(_of => Client)
export class FindManyClientResolver {
  @Query(_returns => [Client], {
    nullable: false,
    description: undefined
  })
  async clients(@Context() ctx: any, @Args() args: FindManyClientArgs): Promise<Client[]> {
    return ctx.prisma.user.findMany(args);
  }
}
