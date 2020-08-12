import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";

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
