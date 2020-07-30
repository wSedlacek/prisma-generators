import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Post)
export class DeleteManyPostResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPost(@Context() ctx: any, @Args() args: DeleteManyPostArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.post.deleteMany(args) as BatchPayload);
  }
}
