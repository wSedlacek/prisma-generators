import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
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

@Resolver(_of => Post)
export class PostCrudResolver {
  @Query(_returns => Post, {
    nullable: true,
    description: undefined
  })
  async post(@Context() ctx: any, @Args() args: FindOnePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.findOne(args);
  }

  @Query(_returns => [Post], {
    nullable: false,
    description: undefined
  })
  async posts(@Context() ctx: any, @Args() args: FindManyPostArgs): Promise<Post[]> {
    return ctx.prisma.post.findMany(args);
  }

  @Mutation(_returns => Post, {
    nullable: false,
    description: undefined
  })
  async createPost(@Context() ctx: any, @Args() args: CreatePostArgs): Promise<Post> {
    return ctx.prisma.post.create(args);
  }

  @Mutation(_returns => Post, {
    nullable: true,
    description: undefined
  })
  async deletePost(@Context() ctx: any, @Args() args: DeletePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.delete(args);
  }

  @Mutation(_returns => Post, {
    nullable: true,
    description: undefined
  })
  async updatePost(@Context() ctx: any, @Args() args: UpdatePostArgs): Promise<Post | undefined> {
    return ctx.prisma.post.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPost(@Context() ctx: any, @Args() args: DeleteManyPostArgs): Promise<BatchPayload> {
    return ctx.prisma.post.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(@Context() ctx: any, @Args() args: UpdateManyPostArgs): Promise<BatchPayload> {
    return ctx.prisma.post.updateMany(args);
  }

  @Mutation(_returns => Post, {
    nullable: false,
    description: undefined
  })
  async upsertPost(@Context() ctx: any, @Args() args: UpsertPostArgs): Promise<Post> {
    return ctx.prisma.post.upsert(args);
  }

  @Query(_returns => AggregatePost, {
    nullable: false,
    description: undefined
  })
  async aggregatePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregatePostArgs): Promise<AggregatePost> {
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

    return ctx.prisma.post.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
