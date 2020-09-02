import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { plainToClass } from "class-transformer";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindOneUserArgs } from "./args/FindOneUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => User)
export class UserCrudResolver {
  @Query(() => User, {
    nullable: true,
    description: undefined
  })
  async user(@Context() ctx: any, @Args() args: FindOneUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.findOne(args) as User);
  }

  @Query(() => [User], {
    nullable: false,
    description: undefined
  })
  async users(@Context() ctx: any, @Args() args: FindManyUserArgs): Promise<User[]> {
    return plainToClass(User, await ctx.prisma.user.findMany(args) as [User]);
  }

  @Mutation(() => User, {
    nullable: false,
    description: undefined
  })
  async createUser(@Context() ctx: any, @Args() args: CreateUserArgs): Promise<User> {
    return plainToClass(User, await ctx.prisma.user.create(args) as User);
  }

  @Mutation(() => User, {
    nullable: true,
    description: undefined
  })
  async deleteUser(@Context() ctx: any, @Args() args: DeleteUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.delete(args) as User);
  }

  @Mutation(() => User, {
    nullable: true,
    description: undefined
  })
  async updateUser(@Context() ctx: any, @Args() args: UpdateUserArgs): Promise<User | null | undefined> {
    return plainToClass(User, await ctx.prisma.user.update(args) as User);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyUser(@Context() ctx: any, @Args() args: DeleteManyUserArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.deleteMany(args) as BatchPayload);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser(@Context() ctx: any, @Args() args: UpdateManyUserArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.user.updateMany(args) as BatchPayload);
  }

  @Mutation(() => User, {
    nullable: false,
    description: undefined
  })
  async upsertUser(@Context() ctx: any, @Args() args: UpsertUserArgs): Promise<User> {
    return plainToClass(User, await ctx.prisma.user.upsert(args) as User);
  }

  @Query(() => AggregateUser, {
    nullable: false,
    description: undefined
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
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
