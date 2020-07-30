import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { Post } from "../../../models/Post";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Post)
export class UpdateManyPostResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(@Context() ctx: any, @Args() args: UpdateManyPostArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.post.updateMany(args) as BatchPayload);
  }
}
