import { Args, Context, Info, Query, Mutation, Resolver } from "@nestjs/graphql";
import { plainToClass } from "class-transformer";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { DeletePostArgs } from "./args/DeletePostArgs";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { FindOnePostArgs } from "./args/FindOnePostArgs";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { UpsertPostArgs } from "./args/UpsertPostArgs";
import { Post } from "../../../models/Post";
import { AggregatePost } from "../../outputs/AggregatePost";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(() => Post)
export class PostCrudResolver {
  @Query(() => Post, {
    nullable: true,
    description: undefined
  })
  async post(@Context() ctx: any, @Args() args: FindOnePostArgs): Promise<Post | null | undefined> {
    return plainToClass(Post, await ctx.prisma.post.findOne(args) as Post);
  }

  @Query(() => [Post], {
    nullable: false,
    description: undefined
  })
  async posts(@Context() ctx: any, @Args() args: FindManyPostArgs): Promise<Post[]> {
    return plainToClass(Post, await ctx.prisma.post.findMany(args) as [Post]);
  }

  @Mutation(() => Post, {
    nullable: false,
    description: undefined
  })
  async createPost(@Context() ctx: any, @Args() args: CreatePostArgs): Promise<Post> {
    return plainToClass(Post, await ctx.prisma.post.create(args) as Post);
  }

  @Mutation(() => Post, {
    nullable: true,
    description: undefined
  })
  async deletePost(@Context() ctx: any, @Args() args: DeletePostArgs): Promise<Post | null | undefined> {
    return plainToClass(Post, await ctx.prisma.post.delete(args) as Post);
  }

  @Mutation(() => Post, {
    nullable: true,
    description: undefined
  })
  async updatePost(@Context() ctx: any, @Args() args: UpdatePostArgs): Promise<Post | null | undefined> {
    return plainToClass(Post, await ctx.prisma.post.update(args) as Post);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPost(@Context() ctx: any, @Args() args: DeleteManyPostArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.post.deleteMany(args) as BatchPayload);
  }

  @Mutation(() => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(@Context() ctx: any, @Args() args: UpdateManyPostArgs): Promise<BatchPayload> {
    return plainToClass(BatchPayload, await ctx.prisma.post.updateMany(args) as BatchPayload);
  }

  @Mutation(() => Post, {
    nullable: false,
    description: undefined
  })
  async upsertPost(@Context() ctx: any, @Args() args: UpsertPostArgs): Promise<Post> {
    return plainToClass(Post, await ctx.prisma.post.upsert(args) as Post);
  }

  @Query(() => AggregatePost, {
    nullable: false,
    description: undefined
  })
  async aggregatePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregatePostArgs): Promise<AggregatePost> {
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

    return ctx.prisma.post.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
