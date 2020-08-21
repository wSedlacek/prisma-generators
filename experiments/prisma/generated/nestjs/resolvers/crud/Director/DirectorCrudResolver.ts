import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { CreateDirectorArgs } from "./args/CreateDirectorArgs";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { FindOneDirectorArgs } from "./args/FindOneDirectorArgs";
import { UpdateDirectorArgs } from "./args/UpdateDirectorArgs";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { Director } from "../../../models/Director";
import { plainToClass } from "class-transformer";
import { AggregateDirector } from "../../outputs/AggregateDirector";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Director)
export class DirectorCrudResolver {
  @Query(() => Director, {
    nullable: true,
    description: undefined
  })
  async director(@Context() ctx: any, @Args() args: FindOneDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.findOne(args) as Director);
  }

  @Query(() => [Director], {
    nullable: false,
    description: undefined
  })
  async directors(@Context() ctx: any, @Args() args: FindManyDirectorArgs): Promise<Director[]> {
    return plainToClass(Director, await ctx.prisma.director.findMany(args) as [Director]);
  }

  @Mutation(() => Director, {
    nullable: false,
    description: undefined
  })
  async createDirector(@Context() ctx: any, @Args() args: CreateDirectorArgs): Promise<Director> {
    return plainToClass(Director, await ctx.prisma.director.create(args) as Director);
  }

  @Mutation(() => Director, {
    nullable: true,
    description: undefined
  })
  async deleteDirector(@Context() ctx: any, @Args() args: DeleteDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.delete(args) as Director);
  }

  @Mutation(() => Director, {
    nullable: true,
    description: undefined
  })
  async updateDirector(@Context() ctx: any, @Args() args: UpdateDirectorArgs): Promise<Director | undefined> {
    return plainToClass(Director, await ctx.prisma.director.update(args) as Director);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyDirector(@Context() ctx: any, @Args() args: DeleteManyDirectorArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.director.deleteMany(args) as BatchPayload);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyDirector(@Context() ctx: any, @Args() args: UpdateManyDirectorArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.director.updateMany(args) as BatchPayload);
  }

  @Mutation(() => Director, {
    nullable: false,
    description: undefined
  })
  async upsertDirector(@Context() ctx: any, @Args() args: UpsertDirectorArgs): Promise<Director> {
    return plainToClass(Director, await ctx.prisma.director.upsert(args) as Director);
  }

  @Query(() => AggregateDirector, {
    nullable: false,
    description: undefined
  })
  async aggregateDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateDirectorArgs): Promise<AggregateDirector> {
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

    return ctx.prisma.director.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
