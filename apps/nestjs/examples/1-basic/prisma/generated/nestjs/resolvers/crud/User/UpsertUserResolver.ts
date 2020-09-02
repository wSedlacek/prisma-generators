import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class UpsertUserResolver {
  @Mutation(() => User, {
    nullable: false,
    description: undefined
  })
  async upsertUser(@Context() ctx: any, @Args() args: UpsertUserArgs): Promise<User> {
    return plainToClass(User, await ctx.prisma.user.upsert(args) as User);
  }
}
