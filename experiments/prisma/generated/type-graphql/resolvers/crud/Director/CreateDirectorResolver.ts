import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { CreateDirectorArgs } from "./args/CreateDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(_of => Director)
export class CreateDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: false,
    description: undefined
  })
  async createDirector(@Context() ctx: any, @Args() args: CreateDirectorArgs): Promise<Director> {
    return ctx.prisma.director.create(args);
  }
}
