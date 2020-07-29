import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { Post } from "../../../models/Post";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Post)
export class DeleteManyPostResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPost(@Context() ctx: any, @Args() args: DeleteManyPostArgs): Promise<BatchPayload> {
    return ctx.prisma.post.deleteMany(args);
  }
}
