import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOneDirectorArgs } from "./args/FindOneDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";

@Resolver(() => Director)
export class FindOneDirectorResolver {
  @Query(() => Director, {
    nullable: true,
    description: undefined
  })
  async director(@Context() ctx: any, @Args() args: FindOneDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.findOne(args) as Director);
  }
}
