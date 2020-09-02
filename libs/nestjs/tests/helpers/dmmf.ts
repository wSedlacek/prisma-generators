import * as generatorBuild from '@prisma/client/generator-build';
import { DMMF } from '@prisma/client/runtime/dmmf-types';
import { GetDMMFOptions } from '@prisma/sdk';

const getDMMF = async (options: GetDMMFOptions): Promise<DMMF.Document> => {
  return generatorBuild.getDMMF(options);
};

export const getPrismaClientDmmfFromPrismaSchema = async (
  prismaSchema: string,
  enableExperimental?: string[]
): Promise<DMMF.Document> => {
  return getDMMF({ enableExperimental, datamodel: prismaSchema });
};
