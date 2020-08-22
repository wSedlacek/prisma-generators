import { DMMF } from '@prisma/client/runtime/dmmf-types';
import { GetDMMFOptions } from '@prisma/sdk';
const PrismaClientGeneratorBuild = require('@prisma/client/generator-build');

const getDMMF = (options: GetDMMFOptions): Promise<DMMF.Document> => {
  return PrismaClientGeneratorBuild.getDMMF(options);
};

const getPrismaClientDmmfFromPrismaSchema = async (
  prismaSchema: string,
  enableExperimental?: string[]
): Promise<DMMF.Document> => {
  return await getDMMF({ datamodel: prismaSchema, enableExperimental });
};

export default getPrismaClientDmmfFromPrismaSchema;
