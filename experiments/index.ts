import "reflect-metadata";
import { Resolver, Query, FieldResolver, Ctx, Args } from "type-graphql";

import { NestFactory } from "@nestjs/core";
import { Module, Logger, ValidationPipe } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

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
} from "./prisma/generated/type-graphql";
import { PrismaClient } from "./prisma/generated/client";

// @ObjectType()
// class User extends BaseUser {}

// @ObjectType()
// class Post extends BasePost {}

interface Context {
  prisma: PrismaClient;
}

@Resolver(of => Client)
class ClientResolver {
  @Query(returns => [Client])
  async allClients(@Ctx() { prisma }: Context): Promise<Client[]> {
    return (await prisma.user.findMany()) as Client[];
  }

  @Query(returns => [Client])
  async customFindClientsWithArgs(
    @Args() args: FindManyClientArgs,
    @Ctx() { prisma }: Context,
  ) {
    return prisma.user.findMany(args);
  }

  @FieldResolver()
  hello(): string {
    return "world!";
  }
}

@Resolver(of => Post)
class PostResolver {
  @Query(returns => [Post])
  async allPosts(@Ctx() { prisma }: Context): Promise<Post[]> {
    return (await prisma.post.findMany()) as Post[];
  }
}

const prisma = new PrismaClient({
  // see dataloader for relations in action
  log: ["query"],
});

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: (): Context => ({ prisma }),
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
  ],
})
class AppModule {}

async function main() {
  const app = await NestFactory.create(AppModule, {});
  const port = 4000;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  await app.listen(port);
  Logger.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
