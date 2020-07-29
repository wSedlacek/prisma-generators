import generateCode from '../src/generator/generate-code';
import { dmmf } from './prisma/generated/client';

generateCode(
  dmmf,
  {
    outputDirPath: `${__dirname}/prisma/generated/type-graphql`,
    relativePrismaOutputPath: `${__dirname}/prisma/generated/client`,
  },
  console.log
);
