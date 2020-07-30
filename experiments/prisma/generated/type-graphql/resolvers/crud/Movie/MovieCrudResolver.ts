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
import { plainToClass, Type } from "class-transformer";
import { AggregateMovie } from "../../outputs/AggregateMovie";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Movie)
export class MovieCrudResolver {
  @Query(() => Movie, {
    nullable: true,
    description: undefined
  })
  async movie(@Context() ctx: any, @Args() args: FindOneMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.findOne(args) as Movie);
  }

  @Query(() => [Movie], {
    nullable: false,
    description: undefined
  })
  async movies(@Context() ctx: any, @Args() args: FindManyMovieArgs): Promise<Movie[]> {
    return plainToClass(Movie, await ctx.prisma.movie.findMany(args) as Movie[]);
  }

  @Mutation(() => Movie, {
    nullable: false,
    description: undefined
  })
  async createMovie(@Context() ctx: any, @Args() args: CreateMovieArgs): Promise<Movie> {
    return plainToClass(Movie, await ctx.prisma.movie.create(args) as Movie);
  }

  @Mutation(() => Movie, {
    nullable: true,
    description: undefined
  })
  async deleteMovie(@Context() ctx: any, @Args() args: DeleteMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.delete(args) as Movie);
  }

  @Mutation(() => Movie, {
    nullable: true,
    description: undefined
  })
  async updateMovie(@Context() ctx: any, @Args() args: UpdateMovieArgs): Promise<Movie | undefined> {
    return plainToClass(Movie, await ctx.prisma.movie.update(args) as Movie);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyMovie(@Context() ctx: any, @Args() args: DeleteManyMovieArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.movie.deleteMany(args) as BatchPayload);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyMovie(@Context() ctx: any, @Args() args: UpdateManyMovieArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.movie.updateMany(args) as BatchPayload);
  }

  @Mutation(() => Movie, {
    nullable: false,
    description: undefined
  })
  async upsertMovie(@Context() ctx: any, @Args() args: UpsertMovieArgs): Promise<Movie> {
    return plainToClass(Movie, await ctx.prisma.movie.upsert(args) as Movie);
  }

  @Query(() => AggregateMovie, {
    nullable: false,
    description: undefined
  })
  async aggregateMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateMovieArgs): Promise<AggregateMovie> {
    const transformFields = (fields: Record<string, any>): Record<string, any> => {
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
