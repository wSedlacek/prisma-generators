import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteClientArgs } from "./args/DeleteClientArgs";
import { Client } from "../../../models/Client";

@Resolver(() => Client)
export class DeleteClientResolver {
  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async deleteClient(@Context() ctx: any, @Args() args: DeleteClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.delete(args);
  }
}
