import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaClient } from '@prisma/client';

import {
  PostCrudResolver,
  PostRelationsResolver,
  UserCrudResolver,
  UserRelationsResolver,
} from '../../prisma/generated/nestjs';
import { CustomUserResolver } from './custom-user.resolver';

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
    UserCrudResolver,
    PostCrudResolver,
    CustomUserResolver,
  ],
})
export class AppModule {}
