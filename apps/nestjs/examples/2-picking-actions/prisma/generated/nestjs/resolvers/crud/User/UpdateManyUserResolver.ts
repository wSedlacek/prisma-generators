import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => User)
export class UpdateManyUserResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser(@Context() ctx: any, @Args() args: UpdateManyUserArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.updateMany(args) as BatchPayload);
  }
}
