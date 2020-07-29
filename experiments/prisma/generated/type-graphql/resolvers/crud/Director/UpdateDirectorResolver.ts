import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { UpdateDirectorArgs } from "./args/UpdateDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(_of => Director)
export class UpdateDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: true,
    description: undefined
  })
  async updateDirector(@Context() ctx: any, @Args() args: UpdateDirectorArgs): Promise<Director | undefined> {
    return ctx.prisma.director.update(args);
  }
}
