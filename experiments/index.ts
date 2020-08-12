import 'reflect-metadata';
import { Resolver, Query, Context, Args, ResolveField } from '@nestjs/graphql';

import { NestFactory } from '@nestjs/core';
import { Module, Logger, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {
  Client,
  // Client as BaseClient,
  ClientRelationsResolver,
  ClientCrudResolver,
  Post,
  // Post as BasePost,
  PostRelationsResolver,
  FindOnePostResolver,
  CreatePostResolver,
  UpdateManyPostResolver,
  // Category,
  CategoryCrudResolver,
  // Patient,
  PatientCrudResolver,
  FindManyPostResolver,
  MovieCrudResolver,
  DirectorCrudResolver,
  DirectorRelationsResolver,
  MovieRelationsResolver,
  FindManyClientArgs,
} from './prisma/generated/nestjs';
import { PrismaClient, FindManyUserArgs } from './prisma/generated/client';
import { plainToClass } from 'class-transformer';
import { ComplexityPlugin } from './complexity.plugin';

// @ObjectType()
// class User extends BaseUser {}

// @ObjectType()
// class Post extends BasePost {}

interface ContextType {
  prisma: PrismaClient;
}

@Resolver(() => Client)
class ClientResolver {
  @Query(() => [Client])
  async allClients(@Context() { prisma }: ContextType): Promise<Client[]> {
    return (await prisma.user.findMany()) as Client[];
  }

  @Query(() => [Client])
  async customFindClientsWithArgs(
    @Args() args: FindManyClientArgs,
    @Context() { prisma }: ContextType
  ) {
    return plainToClass(
      Client,
      await prisma.user.findMany(args as FindManyUserArgs)
    );
  }

  @ResolveField()
  hello(): string {
    return 'world!';
  }
}

@Resolver(() => Post)
class PostResolver {
  @Query(() => [Post])
  async allPosts(@Context() { prisma }: ContextType): Promise<Post[]> {
    return (await prisma.post.findMany()) as Post[];
  }
}

const prisma = new PrismaClient({ log: ['query'] });

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: (): ContextType => ({ prisma }),
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  providers: [
    ClientResolver,
    ClientRelationsResolver,
    ClientCrudResolver,
    PostResolver,
    PostRelationsResolver,
    FindOnePostResolver,
    CreatePostResolver,
    UpdateManyPostResolver,
    CategoryCrudResolver,
    PatientCrudResolver,
    FindManyPostResolver,
    MovieCrudResolver,
    MovieRelationsResolver,
    DirectorCrudResolver,
    DirectorRelationsResolver,
    ComplexityPlugin,
  ],
})
class AppModule {}

const main = async () => {
  const app = await NestFactory.create(AppModule, {});
  const port = 4000;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  await app.listen(port);
  Logger.log(`GraphQL is listening on ${port}!`);
};

main().catch(console.error);
