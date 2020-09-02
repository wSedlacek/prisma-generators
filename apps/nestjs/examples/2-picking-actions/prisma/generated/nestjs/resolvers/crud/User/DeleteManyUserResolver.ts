import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { User } from "../../../models/User";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => User)
export class DeleteManyUserResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser(@Context() ctx: any, @Args() args: DeleteManyUserArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.deleteMany(args) as BatchPayload);
  }
}
