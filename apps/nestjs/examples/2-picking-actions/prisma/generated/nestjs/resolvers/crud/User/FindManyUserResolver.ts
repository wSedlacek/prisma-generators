import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class FindManyUserResolver {
  @Query(() => [User], {
    nullable: false,
    description: undefined
  })
  async users(@Context() ctx: any, @Args() args: FindManyUserArgs): Promise<User[]> {
    return plainToClass(User, await ctx.prisma.user.findMany(args) as [User]);
  }
}
