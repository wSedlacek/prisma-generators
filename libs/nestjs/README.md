# NestJS & Prisma +2 integration

Huge thanks to @MichalLytek for the amazing [typegraphql-prisma](https://www.npmjs.com/package/typegraphql-prisma) library which this library is based on.

## Installation

Installation is pretty straight forward, simply install the package from NPM.

### Yarn

```sh
yarn add @prisma-generators/nestjs
```

### NPM

```sh
npm install @prisma-generators/nestjs
```

### Peer Dependencies

Additionally make sure you have all following peer dependencies installed.
Note that `@prisma/cli` and `@prisma/client` are both locked at a specific version. Please uses these versions to avoid conflicts as the Prisma API matures.

```json
  "@nestjs/graphql": ">=7",
  "@prisma/cli": "~2.6.0",
  "@prisma/client": "~2.6.0",
  "@types/graphql-fields": "*",
  "@types/node": "*",
  "class-transformer": "*",
  "graphql-type-json": "*",
  "tslib": "^2.0.0"
```

## Configuration

Once installed the next step is to add a generator to your `schema.prisma` then run `prisma generate`.

```prisma
generator nestjs {
  provider    = "@prisma-generators/nestjs"
  defaultTake = 20
}
```

The generator supports several options, above we are using `defaultTake` adjust the default value of items to return from `findMany` calls. Here is the full list of options currently supported.

| Key            | Default Value                                       | Description                                                                                                     |
| -------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| output         | "node_modules/@generated/prisma/nestjs"             | Where the generated resolvers should be emitted                                                                 |
| defaultTake    | 20                                                  | Adjust the default number returned from `findMany()`                                                            |
| emitDMMF       | false                                               | Wether or not `dmmf.json` and `prisma-client-dmmf.json` should be emitted to the output directory for debugging |
| emitTranspiled | false (true if `output` is includes `node_modules`) | Wether or not to emit as JavaScript rather then TypeScript                                                      |

## Usage

### Basic usage

Once the library is configured run `prisma generate` via the `@prisma/cli` package and your NestJS resolvers will be generated to the output folder.

```sh
prisma generate
```

From here you can add the resolves to any module's providers and the `GraphQLModule` will pick up on them.

```ts
import { UserCrudResolver } from '@generated/prisma/nestjs';

@Module({
  providers: [UserCrudResolver],
})
export class UserModule {}
```

Lastly you will need to add `prisma` (an instance of PrismaClient) to your GraphQL context in your `GraphQLModule` configuration

```ts
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: { prisma: new PrismaClient() },
    }),
    UserModule,
  ],
})
export class AppModule {}
```

Now you are all set! You can now use whichever resolvers you provided in your GraphQL Queries.

#### Relations

In addition to the Crud Resolvers this generator generates Relation resolvers that use `@ResolverField()` to expose relations to the GraphQL Schema. You can simply import one of these generated relation resolvers and provide in a module.

```ts
import { UserRelationsResolver } from '@generated/prisma/nestjs';

@Module({
  providers: [UserRelationsResolver],
})
export class UserModule {}
```

### Advanced usage

#### Custom operations

If you need to add your own logic (for example guards) to the generated resolvers you can either build your resolvers using the generated classes or extend from an existing resolver.

Using generated classes

```ts
import { User } from '@generated/prisma/nestjs';
import { GraphQLContext } from './some-interface-describing-context';

@Resolver(() => User)
export class CustomUserResolver {
  @Query(() => User)
  public async bestUser(@Context() { prisma }: GraphQLContext) {
    return prisma.user.findOne({ where: { username: 'menma' } });
  }

  @Mutation(() => User)
  public async randomUser(@Context() { prisma }: GraphQLContext) {
    const randomUser = faker.createCard();
    return prisma.user.create(randomUser);
  }
}
```

Extending an existing resolver

```ts
import { FindManyUserResolver } from '@generated/prisma/nestjs';
import { GraphQLContext } from './some-interface-describing-context';

@Resolver(() => User)
export class GuardedFindManyResolver {
  @Query(() => User)
  @UseGuard(SomeGuard)
  public async users(@Context() { prisma }: GraphQLContext) {
    return super.users({ prisma });
  }
}
```

#### Adding fields to model

Resolvers can be extended by adding `@ResolverField()` methods. This can be done in a completely new resolver and used along side the generated resolver.

For example:

```ts
@Resolver(() => User)
export class CustomUserResolver {
  @ResolverField(() => Post, { nullable: true })
  public async favoritePost(
    @Root() user: User,
    @Context() { prisma }: GraphQLContext
  ) {
    const [favoritePost] = await prisma.user
      .findOne({ where: { id: user.id } })
      .posts({ first: 1 });

    return favoritePost;
  }
}
```

#### Exposing selected Prisma actions

The generator generates many resolvers that allow you to pick and choose what operations you want to expose.
For example if your `model` was `User` the following resolvers would be generated

| Action                 | Resolver               |
| ---------------------- | ---------------------- |
| FindOne                | FindOneUserResolver    |
| FindMany               | FindManyUserResolver   |
| Create                 | CreateUserResolver     |
| Update                 | UpdateUserResolver     |
| UpdateMany             | UpdateManyUserResolver |
| Delete                 | DeleteUserResolver     |
| DeleteMany             | DeleteManyUserResolver |
| Upsert                 | UpsertUserResolver     |
| Aggregate              | AggregateUserResolver  |
| Full CRUD (everything) | UserCrudResolver       |

An example of picking `FindMany`, `Create`, `Aggregate` would look like so

```ts
@Module({
  providers: [FindManyUserResolver, CreateUserResolver, AggregateUserResolver],
})
export class UserModule {}
```

#### Exposing documentation

You can expose documentation directly to your GraphQL Schema by adding a comment with three slashes above a field or model.

```prisma
/// A basic user account
model User {
 id     Int     @default(autoincrement()) @id

 /// Full email address, must be unique
 email  String  @unique

 /// Posts that the user has created
 posts  Post[]
}
```

#### Changing exposed model type name

You can change the exposed model name exposed in the GraphQL Schema by adding a doc line with `@@NestJS.type` above the model

```prisma
/// @@NestJS.type("Client")
model User {
  id     Int     @default(autoincrement()) @id
  email  String  @unique
  posts  Post[]
}
```

#### Changing exposed model type field name

Similarly you can rename exposed fields in your GraphQL Schema.

```prisma
model User {
  id     Int     @default(autoincrement()) @id
  /// @NestJS.field("emailAddress")
  email  String  @unique
  posts  Post[]
}
```

Note that Custom Resolvers will require you to transform the plain JSON prisma exports to the class generated prior to returning it as the renaming magic all occurs in the class.

```ts
const users = prisma.user.findMany();
return plainToClass(User, users);
```

All generated CRUD and relations resolvers fully support this feature and they map under the hood the original prisma property to the renamed field exposed in schema.

#### Complexity

Currently relation level complexity is supported. In order to use it you will need to have the complexity plugin setup with the `fieldExtensionsEstimator()` estimator as detailed in the [NestJS Docs](https://docs.nestjs.com/graphql/complexity).

Complexity is calculated by adding the `skip` and `take` arguments then multiplying them by each field.
Keep in mind that `skip` still requires `prisma` to read those rows thus is included in complexity calculations.

Example

```gql
{
  # Ignored until Query/Mutation level complexity support is added
  users(take: 100) {
    name

    # 80(take) + 20(skip) = 100(rows)
    # 100(rows) * ( 2(basic fields) + 20(nested relations) )
    # total: 2200
    posts(take: 80, skip: 20) {
      id
      body

      # 20(default take) + 0(skip) = 20(rows)
      # 20(rows) * 1(basic fields)
      # total: 20
      categories {
        name
      }
    }
  }
}
# total: 2200
```

## Examples

Examples can be found in the [apps/examples](apps/examples) directory.

## Feedback

Currently this library, as with `typegraphql-prisma`, is in an alpha state and subject to large API changes, bugs and compatibility errors. If you run into any problems please check the open issues to see if the problem has already been found. If you don't find an open issue for the problem you are having please make an issue and if you are feeling up to it make a PR to solve the problem 😉

## Planned Features

- Query/Mutation level complexity support, pending [this issue](https://github.com/nestjs/graphql/pull/1088).
