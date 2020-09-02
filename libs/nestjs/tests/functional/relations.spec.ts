import { NestApplication } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import { promises as fs } from 'fs';

import { GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { generateArtifactsDirPath } from '../helpers/artifacts-dir';
import { generateCodeFromSchema } from '../helpers/generate-code';
import { gql } from '../helpers/graphql-template';
import { prisma } from '../helpers/prisma-template';

const postsData = [
  {
    uuid: 'b0c0d78e-4dff-4cdd-ba23-9b417dc684e2',
    color: 'RED',
  },
  {
    uuid: '72c8a188-3d46-45b3-b23f-7d420aa282f1',
    color: 'BLUE',
  },
];

const usersData = [
  {
    id: 1,
    name: 'Test 1',
  },
  {
    id: 2,
    name: 'Test 2',
  },
];

describe('relations resolvers execution', () => {
  const findOnePostMock = jest.fn();
  const findOneUserMock = jest.fn();
  const findOneUserPostsMock = jest.fn();

  let app: NestApplication;
  let apolloClient: ApolloServerTestClient;

  describe('single primary key', () => {
    beforeAll(async () => {
      const outputDirPath = generateArtifactsDirPath('functional-relations');
      await fs.mkdir(outputDirPath, { recursive: true });
      const prismaSchema = prisma`
        enum Color {
          RED
          GREEN
          BLUE
        }

        model User {
          id     Int      @id @default(autoincrement())
          name   String?
          posts  Post[]
        }

        model Post {
          uuid      String  @id @default(cuid())
          title     String
          content   String
          author    User    @relation(fields: [authorId], references: [id])
          authorId  Int
          color     Color
        }
      `;
      await generateCodeFromSchema(prismaSchema, { outputDirPath });
      const {
        UserRelationsResolver,
        PostRelationsResolver,
        User,
        Post,
      } = require(outputDirPath);

      @Resolver()
      class CustomResolver {
        @Query(() => [User])
        public users(): any[] {
          return usersData;
        }

        @Query(() => [Post])
        public posts(): any[] {
          return postsData;
        }
      }

      const moduleFixture = await Test.createTestingModule({
        imports: [
          GraphQLModule.forRoot({
            autoSchemaFile: true,
            context: {
              prisma: {
                post: {
                  findOne: findOnePostMock,
                },
                user: {
                  findOne: findOneUserMock,
                },
              },
            },
          }),
        ],
        providers: [
          CustomResolver,
          UserRelationsResolver,
          PostRelationsResolver,
        ],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();

      const graphqlModule = moduleFixture.get(GraphQLModule);
      apolloClient = createTestClient((graphqlModule as any).apolloServer);
    });

    afterAll(async () => {
      await app.close();
    });

    it('should properly call PrismaClient on fetching array relations', async () => {
      findOneUserMock.mockReturnValue({
        posts: jest.fn().mockResolvedValue(null),
      });

      findOneUserMock.mockReturnValue({
        posts: jest.fn().mockResolvedValue(postsData),
      });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            users {
              name
              posts {
                uuid
                color
              }
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('users with posts mocked response');
      expect(findOneUserMock.mock.calls).toMatchSnapshot(
        'findOneUser relations call args'
      );
    });

    it('should properly call PrismaClient on fetching array relations with args', async () => {
      findOneUserMock.mockReturnValueOnce({
        posts: jest.fn().mockResolvedValue(null),
      });
      findOneUserMock.mockReturnValueOnce({
        posts: findOneUserPostsMock,
      });
      findOneUserPostsMock.mockResolvedValue(postsData);

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            users {
              name
              posts(
                skip: 1
                take: 1
                where: { content: { startsWith: "test" } }
              ) {
                uuid
                color
              }
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('users with posts mocked response');
      expect(findOneUserMock.mock.calls).toMatchSnapshot(
        'findOneUser relations call args'
      );
      expect(findOneUserPostsMock.mock.calls).toMatchSnapshot(
        'posts() relations call args'
      );
    });

    it('should properly call PrismaClient on fetching single relation', async () => {
      findOnePostMock.mockReturnValue({
        author: jest.fn().mockResolvedValue({
          id: 1,
          name: 'Test 1',
        }),
      });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            posts {
              uuid
              author {
                id
                name
              }
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('posts with authors mocked response');
      expect(findOnePostMock.mock.calls).toMatchSnapshot(
        'findOnePost relations call args'
      );
    });
  });

  describe('composite unique key', () => {
    beforeAll(async () => {
      const outputDirPath = generateArtifactsDirPath('functional-relations');
      await fs.mkdir(outputDirPath, { recursive: true });
      const prismaSchema = prisma`
        enum Color {
          RED
          GREEN
          BLUE
        }

        model User {
          id     Int      @id @default(autoincrement())
          name   String?
          posts  Post[]
        }

        model Post {
          title     String
          color     Color
          text      String?
          author    User     @relation(fields: [authorId], references: [id])
          authorId  Int

          @@unique([title, color])
        }
        `;

      await generateCodeFromSchema(prismaSchema, { outputDirPath });
      const { PostRelationsResolver, Post } = require(outputDirPath);
      @Resolver()
      class CustomResolver {
        @Query(() => Post)
        public post(): any {
          return {
            title: 'Post 1',
            color: 'BLUE',
            text: 'Post text',
          };
        }
      }

      const moduleFixture = await Test.createTestingModule({
        imports: [
          GraphQLModule.forRoot({
            autoSchemaFile: true,
            context: {
              prisma: {
                post: {
                  findOne: findOnePostMock,
                },
                user: {
                  findOne: findOneUserMock,
                },
              },
            },
          }),
        ],
        providers: [CustomResolver, PostRelationsResolver],
      }).compile();

      const app = moduleFixture.createNestApplication();
      await app.init();

      const graphqlModule = moduleFixture.get(GraphQLModule);
      apolloClient = createTestClient((graphqlModule as any).apolloServer);
    });

    afterAll(async () => {
      await app.close();
    });

    it('should properly call PrismaClient on fetching array relations', async () => {
      findOnePostMock.mockReturnValueOnce({
        author: jest.fn().mockResolvedValue({
          id: 1,
          name: 'User 1',
        }),
      });

      const { data, errors } = await apolloClient.query({
        query: gql`
          query {
            post {
              title
              color
              text
              author {
                id
                name
              }
            }
          }
        `,
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot('post with author mocked response');
      expect(findOnePostMock.mock.calls).toMatchSnapshot(
        'findOnePost relations call args'
      );
    });
  });
});
