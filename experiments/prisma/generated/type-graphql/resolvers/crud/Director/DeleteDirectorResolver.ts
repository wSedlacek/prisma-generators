import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Director)
export class DeleteDirectorResolver {
  @Mutation(() => Director, {
    nullable: true,
    description: undefined
  })
  async deleteDirector(@Context() ctx: any, @Args() args: DeleteDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.delete(args) as Director);
  }
}
