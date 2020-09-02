import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";

@Resolver(() => User)
export class CreateUserResolver {
  @Mutation(() => User, {
    nullable: false,
    description: undefined
  })
  async createUser(@Context() ctx: any, @Args() args: CreateUserArgs): Promise<User> {
    return plainToClass(User, await ctx.prisma.user.create(args) as User);
  }
}
