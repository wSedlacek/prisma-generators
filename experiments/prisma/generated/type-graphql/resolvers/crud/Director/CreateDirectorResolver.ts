import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateDirectorArgs } from "./args/CreateDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Director)
export class CreateDirectorResolver {
  @Mutation(() => Director, {
    nullable: false,
    description: undefined
  })
  async createDirector(@Context() ctx: any, @Args() args: CreateDirectorArgs): Promise<Director> {
    return plainToClass(Director, await ctx.prisma.director.create(args) as Director);
  }
}
