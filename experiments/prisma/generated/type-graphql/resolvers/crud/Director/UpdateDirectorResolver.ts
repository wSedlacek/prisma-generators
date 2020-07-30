import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateDirectorArgs } from "./args/UpdateDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Director)
export class UpdateDirectorResolver {
  @Mutation(() => Director, {
    nullable: true,
    description: undefined
  })
  async updateDirector(@Context() ctx: any, @Args() args: UpdateDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.update(args) as Director);
  }
}
