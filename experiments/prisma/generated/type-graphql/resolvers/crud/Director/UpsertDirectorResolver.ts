import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";

@Resolver(() => Director)
export class UpsertDirectorResolver {
  @Mutation(() => Director, {
    nullable: false,
    description: undefined
  })
  async upsertDirector(@Context() ctx: any, @Args() args: UpsertDirectorArgs): Promise<Director> {
    return plainToClass(Director, await ctx.prisma.director.upsert(args) as Director);
  }
}
