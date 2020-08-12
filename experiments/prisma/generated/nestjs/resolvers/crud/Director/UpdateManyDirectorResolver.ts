import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Director)
export class UpdateManyDirectorResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyDirector(@Context() ctx: any, @Args() args: UpdateManyDirectorArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.director.updateMany(args) as BatchPayload);
  }
}
