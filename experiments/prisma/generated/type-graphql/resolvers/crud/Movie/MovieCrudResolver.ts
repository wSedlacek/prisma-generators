import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs";
import { CreateMovieArgs } from "./args/CreateMovieArgs";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { DeleteMovieArgs } from "./args/DeleteMovieArgs";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { FindOneMovieArgs } from "./args/FindOneMovieArgs";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { UpdateMovieArgs } from "./args/UpdateMovieArgs";
import { UpsertMovieArgs } from "./args/UpsertMovieArgs";
import { Movie } from "../../../models/Movie";
import { AggregateMovie } from "../../outputs/AggregateMovie";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Movie)
export class MovieCrudResolver {
  @Query(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async movie(@Context() ctx: any, @Args() args: FindOneMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.findOne(args);
  }

  @Query(_returns => [Movie], {
    nullable: false,
    description: undefined
  })
  async movies(@Context() ctx: any, @Args() args: FindManyMovieArgs): Promise<Movie[]> {
    return ctx.prisma.movie.findMany(args);
  }

  @Mutation(_returns => Movie, {
    nullable: false,
    description: undefined
  })
  async createMovie(@Context() ctx: any, @Args() args: CreateMovieArgs): Promise<Movie> {
    return ctx.prisma.movie.create(args);
  }

  @Mutation(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async deleteMovie(@Context() ctx: any, @Args() args: DeleteMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.delete(args);
  }

  @Mutation(_returns => Movie, {
    nullable: true,
    description: undefined
  })
  async updateMovie(@Context() ctx: any, @Args() args: UpdateMovieArgs): Promise<Movie | undefined> {
    return ctx.prisma.movie.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMovie(@Context() ctx: any, @Args() args: DeleteManyMovieArgs): Promise<BatchPayload> {
    return ctx.prisma.movie.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMovie(@Context() ctx: any, @Args() args: UpdateManyMovieArgs): Promise<BatchPayload> {
    return ctx.prisma.movie.updateMany(args);
  }

  @Mutation(_returns => Movie, {
    nullable: false,
    description: undefined
  })
  async upsertMovie(@Context() ctx: any, @Args() args: UpsertMovieArgs): Promise<Movie> {
    return ctx.prisma.movie.upsert(args);
  }

  @Query(_returns => AggregateMovie, {
    nullable: false,
    description: undefined
  })
  async aggregateMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateMovieArgs): Promise<AggregateMovie> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.movie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
