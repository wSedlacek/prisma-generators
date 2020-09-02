import { Context, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';

import { Post, User } from '../../prisma/generated/nestjs';
import { GraphQLContext } from './graphql-context';

@Resolver(() => User)
export class CustomUserResolver {
  @Query(() => User, { nullable: true })
  public async bestUser(
    @Context() { prisma }: GraphQLContext
  ): Promise<User | null> {
    return prisma.user.findOne({
      where: { email: 'bob@prisma.io' },
    });
  }

  @ResolveField(() => Post, { nullable: true })
  public async favoritePost(
    @Root() user: User,
    @Context() { prisma }: GraphQLContext
  ): Promise<Post | undefined> {
    const [favoritePost] = await prisma.user
      .findOne({ where: { id: user.id } })
      .posts({ take: 1 });

    return favoritePost;
  }
}
