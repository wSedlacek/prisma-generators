import { NestApplication } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { Test } from '@nestjs/testing';
import { promises as fs } from 'fs';
import { GraphQLSchema, printSchema } from 'graphql';

import { generateArtifactsDirPath } from '../helpers/artifacts-dir';
import { generateCodeFromSchema } from '../helpers/generate-code';
import { prisma } from '../helpers/prisma-template';

describe('picking prisma actions', () => {
  let app: NestApplication;
  let graphQLSchemaSDL: GraphQLSchema;

  beforeAll(async () => {
    const outputDirPath = generateArtifactsDirPath(
      'functional-picking-actions'
    );
    await fs.mkdir(outputDirPath, { recursive: true });
    const prismaSchema = prisma`
      model User {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;
    await generateCodeFromSchema(prismaSchema, { outputDirPath });

    const moduleFixture = await Test.createTestingModule({
      imports: [GraphQLSchemaBuilderModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);

    const { CreateUserResolver, FindManyUserResolver } = require(outputDirPath);
    graphQLSchemaSDL = await gqlSchemaFactory.create(
      [CreateUserResolver, FindManyUserResolver],
      { skipCheck: true }
    );

    await app.close();
  });

  it('should expose in GraphQL schema only actions chosen by single resolvers', () => {
    expect(printSchema(graphQLSchemaSDL)).toMatchSnapshot('graphQLSchemaSDL');
  });
});
