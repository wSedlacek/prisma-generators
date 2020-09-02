import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class UpdateUserResolver {
  @Mutation(() => User, {
    nullable: true,
    description: undefined
  })
  async updateUser(@Context() ctx: any, @Args() args: UpdateUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.update(args) as User);
  }
}
