import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindOneDirectorArgs } from "./args/FindOneDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(_of => Director)
export class FindOneDirectorResolver {
  @Query(_returns => Director, {
    nullable: true,
    description: undefined
  })
  async director(@Context() ctx: any, @Args() args: FindOneDirectorArgs): Promise<Director | undefined> {
    return ctx.prisma.director.findOne(args);
  }
}
