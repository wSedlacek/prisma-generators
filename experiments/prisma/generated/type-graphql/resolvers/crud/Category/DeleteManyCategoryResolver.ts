import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { Category } from "../../../models/Category";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Category)
export class DeleteManyCategoryResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyCategory(@Context() ctx: any, @Args() args: DeleteManyCategoryArgs): Promise<BatchPayload> {
    return ctx.prisma.category.deleteMany(args);
  }
}
