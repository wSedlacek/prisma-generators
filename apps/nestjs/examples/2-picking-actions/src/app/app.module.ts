import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaClient } from '@prisma/client';

import {
  AggregatePostResolver,
  AggregateUserResolver,
  FindManyPostResolver,
  FindManyUserResolver,
  FindOnePostResolver,
  FindOneUserResolver,
  PostRelationsResolver,
  UserRelationsResolver,
} from '../../prisma/generated/nestjs';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: { prisma: new PrismaClient() },
    }),
  ],
  providers: [
    UserRelationsResolver,
    PostRelationsResolver,
    // instead of PostCrudResolver, expose only find and aggregate  actions
    FindOnePostResolver,
    FindManyPostResolver,
    AggregatePostResolver,
    // instead of UserCrudResolver, expose only find and aggregate actions
    FindOneUserResolver,
    FindManyUserResolver,
    AggregateUserResolver,
  ],
})
export class AppModule {}
