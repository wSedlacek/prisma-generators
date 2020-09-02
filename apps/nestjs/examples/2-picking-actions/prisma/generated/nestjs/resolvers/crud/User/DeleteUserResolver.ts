import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class DeleteUserResolver {
  @Mutation(() => User, {
    nullable: true,
    description: undefined
  })
  async deleteUser(@Context() ctx: any, @Args() args: DeleteUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.delete(args) as User);
  }
}
