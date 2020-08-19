import { download } from '@prisma/fetch-engine';
import * as path from 'path';
import { promises as fs } from 'fs';

const prismaClientRuntimeDir = path.join(
  __dirname,
  '../../node_modules/@prisma/client'
);

const ensurePrismaEngine = async () => {
  try {
    await fs.access(prismaClientRuntimeDir);
    await download({
      binaries: {
        'query-engine': prismaClientRuntimeDir,
      },
      showProgress: true,
      version: require('@prisma/cli/package.json').prisma.version,
    });
  } catch {
    throw new Error(
      'Missing PrismaClient directory: ' + prismaClientRuntimeDir
    );
  }
};

export default ensurePrismaEngine;
