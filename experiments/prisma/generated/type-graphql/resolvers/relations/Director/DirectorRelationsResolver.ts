import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { DirectorMoviesArgs } from "./args/DirectorMoviesArgs";

@Resolver(_of => Director)
export class DirectorRelationsResolver {
  @ResolveField(_type => [Movie], {
    nullable: true,
    description: undefined,
  })
  async movies(@Root() director: Director, @Context() ctx: any, @Args() args: DirectorMoviesArgs): Promise<Movie[] | undefined> {
    return ctx.prisma.director.findOne({
      where: {
        firstName_lastName: {
          firstName: director.firstName,
          lastName: director.lastName,
        },
      },
    }).movies(args);
  }
}
