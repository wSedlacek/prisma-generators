import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { FindOneUserArgs } from "./args/FindOneUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class FindOneUserResolver {
  @Query(() => User, {
    nullable: true,
    description: undefined
  })
  async user(@Context() ctx: any, @Args() args: FindOneUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.findOne(args) as User);
  }
}
