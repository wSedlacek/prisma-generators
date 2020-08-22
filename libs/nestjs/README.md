# NestJS & Prisma +2 integration

Huge thanks to @MichalLytek for the amazing `typegraphql-prisma` library which this library is based on.

## Installation

Installation is pretty straight forward, simply install the package from NPM.

### Yarn

```sh
yarn add nestjs-prisma-generator
```

### NPM

```sh
npm install nestjs-prisma-generator
```

### Peer Dependencies

Additionally make sure you have all following peer dependencies installed.
Note that `@prisma/cli` and `@prisma/client` are both locked at a specific version. Please uses these versions to avoid conflicts as the Prisma API matures.

```json
"@nestjs/graphql": ">=7",
"@prisma/cli": "~2.5.1",
"@prisma/client": "~2.5.1",
"@types/graphql-fields": "^1.3.3",
"@types/node": "*",
"graphql-type-json": "^0.3.2"
```

## Configuration

Once installed the next step is to add a generator to your `schema.prisma` then run `prisma generate`.

```prisma
generator nestjs {
  provider    = "nestjs-prisma-generator"
  defaultTake = 20
}
```

The generator supports several options, above we are using `defaultTake` adjust the default value of items to return from `findMany` calls. Here is the full list of options currently supported.

| Key         | Default Value                           | Description                                                                                                     |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| output      | "node_modules/@generated/prisma/nestjs" | Where the generated resolvers should be emitted                                                                 |
| defaultTake | 20                                      | Adjust the default number returned from `findMany()`                                                            |
| emitDMMF    | false                                   | Wether or not `dmmf.json` and `prisma-client-dmmf.json` should be emitted to the output directory for debugging |

## Usage

### Basic usage

### Advanced usage

#### Custom operations

#### Adding fields to model type

#### Exposing selected Prisma actions

#### Changing exposed model type name

#### Changing exposed model type field name

#### Complexity

## Examples

Examples can be found in the `apps/examples` directory.

## Feedback

Currently this library, as with `typegraphql-prisma`, is in an alpha state and subject to large API changes, bugs and compatibility errors. If you run into any problems please check the open issues to see if the problem has already been found. If you don't find an open issue for the problem you are having please make an issue and if you are feeling up to it make a PR to solve the problem 😉

## Planned Features

- Query/Mutation level complexity support, pending [this issue](https://github.com/nestjs/graphql/pull/1088).
