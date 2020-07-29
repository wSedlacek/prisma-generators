import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { Director } from "../../../models/Director";

@Resolver(() => Director)
export class FindManyDirectorResolver {
  @Query(() => [Director], {
    nullable: false,
    description: undefined
  })
  async directors(@Context() ctx: any, @Args() args: FindManyDirectorArgs): Promise<Director[]> {
    return ctx.prisma.director.findMany(args);
  }
}
