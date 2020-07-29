import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(_of => Director)
export class DeleteDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: true,
    description: undefined
  })
  async deleteDirector(@Context() ctx: any, @Args() args: DeleteDirectorArgs): Promise<Director | undefined> {
    return ctx.prisma.director.delete(args);
  }
}
