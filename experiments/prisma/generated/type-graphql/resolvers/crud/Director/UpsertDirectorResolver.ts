import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(() => Director)
export class UpsertDirectorResolver {
  @Mutation(() => Director, {
    nullable: false,
    description: undefined
  })
  async upsertDirector(@Context() ctx: any, @Args() args: UpsertDirectorArgs): Promise<Director> {
    return ctx.prisma.director.upsert(args);
  }
}
