import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";

@Resolver(() => Movie)
export class MovieRelationsResolver {
  @ResolveField(() => Director, {
    nullable: false,
    description: undefined,
  })
  async director(@Root() movie: Movie, @Context() ctx: any): Promise<Director> {
    return ctx.prisma.movie.findOne({
      where: {
        directorFirstName_directorLastName_title: {
          directorFirstName: movie.directorFirstName,
          directorLastName: movie.directorLastName,
          title: movie.title,
        },
      },
    }).director({});
  }
}
