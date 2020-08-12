import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import * as graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClientArgs } from "./args/AggregateClientArgs";
import { CreateClientArgs } from "./args/CreateClientArgs";
import { DeleteClientArgs } from "./args/DeleteClientArgs";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { FindOneClientArgs } from "./args/FindOneClientArgs";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { UpdateManyClientArgs } from "./args/UpdateManyClientArgs";
import { UpsertClientArgs } from "./args/UpsertClientArgs";
import { Client } from "../../../models/Client";
import { plainToClass } from "class-transformer";
import { AggregateClient } from "../../outputs/AggregateClient";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Client)
export class ClientCrudResolver {
  @Query(() => Client, {
    nullable: true,
    description: undefined
  })
  async client(@Context() ctx: any, @Args() args: FindOneClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.findOne(args) as Client);
  }

  @Query(() => [Client], {
    nullable: false,
    description: undefined
  })
  async clients(@Context() ctx: any, @Args() args: FindManyClientArgs): Promise<Client[]> {
    return plainToClass(Client, await ctx.prisma.user.findMany(args) as [Client]);
  }

  @Mutation(() => Client, {
    nullable: false,
    description: undefined
  })
  async createClient(@Context() ctx: any, @Args() args: CreateClientArgs): Promise<Client> {
    return plainToClass(Client, await ctx.prisma.user.create(args) as Client);
  }

  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async deleteClient(@Context() ctx: any, @Args() args: DeleteClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.delete(args) as Client);
  }

  @Mutation(() => Client, {
    nullable: true,
    description: undefined
  })
  async updateClient(@Context() ctx: any, @Args() args: UpdateClientArgs): Promise<Client | undefined> {
    return plainToClass(Client, await ctx.prisma.user.update(args) as Client);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyClient(@Context() ctx: any, @Args() args: DeleteManyClientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.deleteMany(args) as BatchPayload);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyClient(@Context() ctx: any, @Args() args: UpdateManyClientArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.updateMany(args) as BatchPayload);
  }

  @Mutation(() => Client, {
    nullable: false,
    description: undefined
  })
  async upsertClient(@Context() ctx: any, @Args() args: UpsertClientArgs): Promise<Client> {
    return plainToClass(Client, await ctx.prisma.user.upsert(args) as Client);
  }

  @Query(() => AggregateClient, {
    nullable: false,
    description: undefined
  })
  async aggregateClient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateClientArgs): Promise<AggregateClient> {
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

    return ctx.prisma.user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
