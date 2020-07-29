import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { Category } from "../../../models/Category";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Category)
export class UpdateManyCategoryResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyCategory(@Context() ctx: any, @Args() args: UpdateManyCategoryArgs): Promise<BatchPayload> {
    return ctx.prisma.category.updateMany(args);
  }
}
