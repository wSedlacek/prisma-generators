import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { Category } from "../../../models/Category";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Category)
export class UpdateManyCategoryResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategory(@Context() ctx: any, @Args() args: UpdateManyCategoryArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.category.updateMany(args) as BatchPayload);
  }
}
