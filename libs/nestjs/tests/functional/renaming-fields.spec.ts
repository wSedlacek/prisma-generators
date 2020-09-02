import { NestApplication } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { Test } from '@nestjs/testing';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import { promises as fs } from 'fs';
import 'reflect-metadata';

import { generateArtifactsDirPath } from '../helpers/artifacts-dir';
import { generateCodeFromSchema } from '../helpers/generate-code';
import { gql } from '../helpers/graphql-template';
import { prisma } from '../helpers/prisma-template';

describe('crud resolvers execution', () => {
  let outputDirPath: string;

  let app: NestApplication;
  let apolloClient: ApolloServerTestClient;

  const findOneMock = jest.fn();
  const findManyMock = jest.fn();

  beforeAll(async () => {
    outputDirPath = generateArtifactsDirPath('renaming-fields');
    await fs.mkdir(outputDirPath, { recursive: true });
    const prismaSchema = prisma`
      model User {
        id           Int       @id @default(autoincrement())
        dateOfBirth  DateTime
        /// @NestJS.field("firstName")
        name         String
      }
    `;
    await generateCodeFromSchema(prismaSchema, { outputDirPath });

    const {
      UserCrudResolver,
    } = require(`${outputDirPath}/resolvers/crud/User/UserCrudResolver.ts`);

    const moduleFixture = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot({
          autoSchemaFile: `${outputDirPath}/schema.graphql`,
          context: {
            prisma: {
              user: {
                findOne: findOneMock,
                findMany: findManyMock,
              },
            },
          },
        }),
      ],
      providers: [UserCrudResolver],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const graphqlModule = moduleFixture.get(GraphQLModule);
    apolloClient = createTestClient((graphqlModule as any).apolloServer);
  }, 10000);

  it('should properly resolve aliased field values from prisma model values', async () => {
    findOneMock.mockResolvedValue({
      id: 1,
      dateOfBirth: new Date('2019-12-31T14:16:02.572Z'),
      name: 'John',
    });

    const { data, errors } = await apolloClient.query({
      query: gql`
        query {
          user(where: { id: 1 }) {
            id
            dateOfBirth
            firstName
          }
        }
      `,
    });

    expect(errors).toBeUndefined();
    expect(data).toMatchSnapshot('user mocked response');
    expect(findOneMock.mock.calls).toMatchSnapshot('findOneUser call args');
  });

  it('should properly map aliased input field values to prisma input values', async () => {
    findManyMock.mockResolvedValue([{ id: 1 }]);

    const { errors } = await apolloClient.query({
      query: gql`
        query {
          users(where: { firstName: { equals: "John" } }) {
            id
          }
        }
      `,
    });

    expect(errors).toBeUndefined();
    expect(findManyMock.mock.calls).toMatchSnapshot('findManyUser call args');
  });
});
