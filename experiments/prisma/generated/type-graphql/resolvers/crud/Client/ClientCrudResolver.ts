import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import graphqlFields from "graphql-fields";
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
import { AggregateClient } from "../../outputs/AggregateClient";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Client)
export class ClientCrudResolver {
  @Query(_returns => Client, {
    nullable: true,
    description: undefined
  })
  async client(@Context() ctx: any, @Args() args: FindOneClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.findOne(args);
  }

  @Query(_returns => [Client], {
    nullable: false,
    description: undefined
  })
  async clients(@Context() ctx: any, @Args() args: FindManyClientArgs): Promise<Client[]> {
    return ctx.prisma.user.findMany(args);
  }

  @Mutation(_returns => Client, {
    nullable: false,
    description: undefined
  })
  async createClient(@Context() ctx: any, @Args() args: CreateClientArgs): Promise<Client> {
    console.log(args.data)
    return ctx.prisma.user.create(args);
  }

  @Mutation(_returns => Client, {
    nullable: true,
    description: undefined
  })
  async deleteClient(@Context() ctx: any, @Args() args: DeleteClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.delete(args);
  }

  @Mutation(_returns => Client, {
    nullable: true,
    description: undefined
  })
  async updateClient(@Context() ctx: any, @Args() args: UpdateClientArgs): Promise<Client | undefined> {
    return ctx.prisma.user.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyClient(@Context() ctx: any, @Args() args: DeleteManyClientArgs): Promise<BatchPayload> {
    return ctx.prisma.user.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyClient(@Context() ctx: any, @Args() args: UpdateManyClientArgs): Promise<BatchPayload> {
    return ctx.prisma.user.updateMany(args);
  }

  @Mutation(_returns => Client, {
    nullable: false,
    description: undefined
  })
  async upsertClient(@Context() ctx: any, @Args() args: UpsertClientArgs): Promise<Client> {
    return ctx.prisma.user.upsert(args);
  }

  @Query(_returns => AggregateClient, {
    nullable: false,
    description: undefined
  })
  async aggregateClient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateClientArgs): Promise<AggregateClient> {
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

    return ctx.prisma.user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
