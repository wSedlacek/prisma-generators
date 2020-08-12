import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";

@Resolver(() => Director)
export class FindManyDirectorResolver {
  @Query(() => [Director], {
    nullable: false,
    description: undefined
  })
  async directors(@Context() ctx: any, @Args() args: FindManyDirectorArgs): Promise<Director[]> {
    return plainToClass(Director, await ctx.prisma.director.findMany(args) as [Director]);
  }
}