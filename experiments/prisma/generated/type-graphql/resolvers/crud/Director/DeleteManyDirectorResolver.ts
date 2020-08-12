import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass, Type } from "class-transformer";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Director)
export class DeleteManyDirectorResolver {
  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyDirector(@Context() ctx: any, @Args() args: DeleteManyDirectorArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.director.deleteMany(args) as BatchPayload);
  }
}