import { download } from '@prisma/fetch-engine';
import { promises as fs } from 'fs';
import * as path from 'path';

const prismaClientRuntimeDir = path.join(
  __dirname,
  '../../../../node_modules/@prisma/client'
);

export const ensurePrismaEngine = async () => {
  try {
    await fs.access(prismaClientRuntimeDir);
    await download({
      binaries: {
        'query-engine': prismaClientRuntimeDir,
      },
      showProgress: true,
      version: await import('@prisma/cli/package.json').then(
        ({ prisma }) => prisma.version
      ),
    });
  } catch (e) {
    console.log(e);
    throw new Error(
      `Missing PrismaClient directory: ${prismaClientRuntimeDir}`
    );
  }
};
