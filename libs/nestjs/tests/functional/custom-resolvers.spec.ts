import { NestApplication } from '@nestjs/core';
import { Args, Context, GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { Test } from '@nestjs/testing';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import { promises as fs } from 'fs';

import { generateArtifactsDirPath } from '../helpers/artifacts-dir';
import { generateCodeFromSchema } from '../helpers/generate-code';
import { gql } from '../helpers/graphql-template';
import { prisma } from '../helpers/prisma-template';

describe('custom resolvers execution', () => {
  let outputDirPath: string;

  let app: NestApplication;
  let apolloClient: ApolloServerTestClient;

  const findManyPostMock = jest.fn();

  beforeAll(async () => {
    outputDirPath = generateArtifactsDirPath('functional-custom-resolvers');
    await fs.mkdir(outputDirPath, { recursive: true });
    const prismaSchema = prisma`
      enum Color {
        RED
        GREEN
        BLUE
      }

      model Post {
        uuid     String  @id @default(cuid())
        content  String
        color    Color
      }
    `;

    await generateCodeFromSchema(prismaSchema, { outputDirPath });
    const { Post, FindManyPostArgs } = require(outputDirPath);

    @Resolver()
    class CustomResolver {
      @Query((_returns) => [Post])
      public async customFindManyPost(
        @Args({ type: () => FindManyPostArgs }) args: any,
        @Context() { prisma }: any
      ): Promise<typeof Post[]> {
        return prisma.post.findMany(args);
      }
    }

    const moduleFixture = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot({
          autoSchemaFile: `${outputDirPath}/schema.graphql`,
          context: {
            prisma: {
              post: {
                findMany: findManyPostMock,
              },
            },
          },
        }),
      ],
      providers: [CustomResolver],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const graphqlModule = moduleFixture.get(GraphQLModule);
    apolloClient = createTestClient((graphqlModule as any).apolloServer);
  }, 10000);

  it('should be possible to use generated inputs, args and types to build own resolvers', async () => {
    findManyPostMock.mockResolvedValue([
      {
        uuid: 'b0c0d78e-4dff-4cdd-ba23-9b417dc684e2',
        color: 'RED',
      },
      {
        uuid: '72c8a188-3d46-45b3-b23f-7d420aa282f1',
        color: 'BLUE',
      },
    ]);

    const { data, errors } = await apolloClient.query({
      query: gql`
        query {
          customFindManyPost(
            take: 1
            skip: 1
            where: { content: { startsWith: "Test" } }
            orderBy: { color: desc }
          ) {
            uuid
            color
          }
        }
      `,
    });

    expect(errors).toBeUndefined();
    expect(data).toMatchSnapshot('custom posts resolver mocked response');
    expect(findManyPostMock.mock.calls).toMatchSnapshot(
      'findManyPost call args'
    );
  });

  it('should produce a SDL', async () => {
    const graphQLSchemaSDL = await fs.readFile(
      `${outputDirPath}/schema.graphql`,
      { encoding: 'utf8' }
    );
    expect(graphQLSchemaSDL).toMatchSnapshot('graphQLSchemaSDL');
  });
});
