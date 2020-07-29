import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { Post } from "../../../models/Post";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Post)
export class UpdateManyPostResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(@Context() ctx: any, @Args() args: UpdateManyPostArgs): Promise<BatchPayload> {
    return ctx.prisma.post.updateMany(args);
  }
}
