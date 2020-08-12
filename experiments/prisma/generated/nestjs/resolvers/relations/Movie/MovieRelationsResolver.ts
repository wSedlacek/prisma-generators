import { Args, Context, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { plainToClass } from "class-transformer";

@Resolver(() => Movie)
export class MovieRelationsResolver {
  @ResolveField(() => Director, {
    nullable: false,
    description: undefined,
    complexity: ({ childComplexity }) => 1 * childComplexity
  })
  async director(@Root() movie: Movie, @Context() ctx: any): Promise<Director> {
    return plainToClass(Director, await ctx.prisma.movie.findOne({
      where: {
        directorFirstName_directorLastName_title: {
          directorFirstName: movie.directorFirstName,
          directorLastName: movie.directorLastName,
          title: movie.title,
        },
      },
    }).director({}) as Director);
  }
}
