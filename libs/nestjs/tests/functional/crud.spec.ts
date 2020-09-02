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
  describe('basic operations', () => {
    let outputDirPath: string;

    let app: NestApplication;
    let apolloClient: ApolloServerTestClient;

    const findOneMock = jest.fn();
    const findManyMock = jest.fn();
    const createMock = jest.fn();
    const updateMock = jest.fn();
    const updateManyMock = jest.fn();
    const deleteMock = jest.fn();
    const deleteManyMock = jest.fn();
    const upsertMock = jest.fn();

    beforeAll(async () => {
      outputDirPath = generateArtifactsDirPath('functional-crud');
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
                  create: createMock,
                  delete: deleteMock,
                  deleteMany: deleteManyMock,
                  update: updateMock,
                  updateMany: updateManyMock,
                  upsert: upsertMock,
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

    it('should properly call PrismaClient on `findOne` action', async () => {
      findOneMock.mockResolvedValue({
        intIdField: 1,
        dateField: new Date('2019-12-31T14:16:02.572Z'),
      });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            user(where: { uniqueStringField: "uniqueValue" }) {
              intIdField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('user mocked response');
      expect(findOneMock.mock.calls).toMatchSnapshot('findOneUser call args');
    });

    it('should properly call PrismaClient on `findMany` action', async () => {
      findManyMock.mockResolvedValue([
        {
          intIdField: 1,
          dateField: new Date('2019-12-31T14:16:02.572Z'),
        },
      ]);

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            users(
              take: 1
              skip: 1
              orderBy: { intIdField: desc }
              where: { dateField: { lte: "2019-12-31T19:16:02.572Z" } }
            ) {
              intIdField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('users mocked response');
      expect(findManyMock.mock.calls).toMatchSnapshot('findManyUser call args');
    });

    it('should properly call PrismaClient on `create` action', async () => {
      createMock.mockResolvedValue({
        intIdField: 1,
        dateField: new Date('2019-12-31T14:16:02.572Z'),
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            createUser(
              data: {
                uniqueStringField: "unique"
                optionalStringField: "optional"
                dateField: "2019-12-31T14:16:02.572Z"
              }
            ) {
              intIdField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('createUser mocked response');
      expect(createMock.mock.calls).toMatchSnapshot('createUser call args');
    });

    it('should properly call PrismaClient on `update` action', async () => {
      updateMock.mockResolvedValue({
        intIdField: 1,
        dateField: '2019-12-31T14:16:02.572Z',
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            updateUser(
              data: { dateField: { set: "2019-12-31T14:16:02.572Z" } }
              where: { uniqueStringField: "unique" }
            ) {
              intIdField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('updateUser mocked response');
      expect(updateMock.mock.calls).toMatchSnapshot('updateUser call args');
    });

    it('should properly call PrismaClient on `updateMany` action', async () => {
      updateManyMock.mockResolvedValue({
        count: 3,
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            updateManyUser(
              data: { optionalStringField: null }
              where: { dateField: { lte: "2019-12-31T19:16:02.572Z" } }
            ) {
              count
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('updateManyUser mocked response');
      expect(updateManyMock.mock.calls).toMatchSnapshot(
        'updateManyUser call args'
      );
    });

    it('should properly call PrismaClient on `delete` action', async () => {
      deleteMock.mockResolvedValue({
        intIdField: 1,
        dateField: new Date('2019-12-31T14:16:02.572Z'),
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            deleteUser(where: { uniqueStringField: "unique" }) {
              intIdField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('deleteUser mocked response');
      expect(deleteMock.mock.calls).toMatchSnapshot('deleteUser call args');
    });

    it('should properly call PrismaClient on `deleteMany` action', async () => {
      deleteManyMock.mockResolvedValue({
        count: 3,
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            deleteManyUser(
              where: { dateField: { lte: "2019-12-31T19:16:02.572Z" } }
            ) {
              count
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('deleteManyUser mocked response');
      expect(deleteManyMock.mock.calls).toMatchSnapshot(
        'deleteManyUser call args'
      );
    });

    it('should properly call PrismaClient on `upsert` action', async () => {
      upsertMock.mockResolvedValue({
        intIdField: 1,
        uniqueStringField: 'unique',
        optionalStringField: 'optional',
        dateField: new Date('2019-12-31T14:16:02.572Z'),
      });

      const { data, errors } = await apolloClient.mutate({
        mutation: gql`
          mutation {
            upsertUser(
              where: { uniqueStringField: "unique" }
              create: {
                uniqueStringField: "unique"
                optionalStringField: "optional"
                dateField: "2019-12-31T14:16:02.572Z"
              }
              update: { optionalStringField: null }
            ) {
              intIdField
              uniqueStringField
              optionalStringField
              dateField
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('upsertUser mocked response');
      expect(upsertMock.mock.calls).toMatchSnapshot('upsertUser call args');
    });
  });

  describe('aggregations', () => {
    let outputDirPath: string;
    let app: NestApplication;
    let apolloClient: ApolloServerTestClient;

    const aggregateMock = jest.fn();

    beforeAll(async () => {
      outputDirPath = generateArtifactsDirPath('functional-crud');
      await fs.mkdir(outputDirPath, { recursive: true });
      const prismaSchema = prisma`
        model User {
          idField     Int  @id @default(autoincrement())
          intField    Int
          floatField  Int
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
                  aggregate: aggregateMock,
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
    });

    it('should properly call PrismaClient on `aggregate` action with simple count field', async () => {
      aggregateMock.mockResolvedValue({ count: 5 });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            aggregateUser(
              take: 1
              skip: 1
              orderBy: { intField: desc }
              where: { floatField: { lte: 50 } }
            ) {
              count
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('aggregateUserCount mocked response');
      expect(aggregateMock.mock.calls).toMatchSnapshot(
        'user.aggregate call args'
      );
    });

    it('should properly call PrismaClient on `aggregate` action with advanced operations', async () => {
      aggregateMock.mockResolvedValue({
        count: 2,
        min: {
          intField: 0,
          floatField: 0,
        },
        max: {
          intField: 10,
          floatField: 10,
        },
        sum: {
          intField: 10,
          floatField: 10,
        },
        avg: {
          intField: 5,
          floatField: 5,
        },
      });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            aggregateUser(
              take: 1
              skip: 1
              orderBy: { intField: desc }
              where: { floatField: { lte: 50 } }
            ) {
              __typename
              count
              min {
                __typename
                intField
                floatField
              }
              max {
                __typename
                intField
                floatField
              }
              sum {
                __typename
                intField
                floatField
              }
              avg {
                __typename
                intField
                floatField
              }
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('aggregateUser mocked response');
      expect(aggregateMock.mock.calls).toMatchSnapshot(
        'user.aggregate call args'
      );
    });
  });
});
