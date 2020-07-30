import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneDirectorArgs } from "./args/FindOneDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass, Type } from "class-transformer";

@Resolver(() => Director)
export class FindOneDirectorResolver {
  @Query(() => Director, {
    nullable: true,
    description: undefined
  })
  async director(@Context() ctx: any, @Args() args: FindOneDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.findOne(args) as Director);
  }
}
