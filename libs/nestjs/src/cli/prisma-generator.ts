import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { GeneratorOptions } from '@prisma/generator-helper';
import { promises as fs } from 'fs';
import path from 'path';

import { generateCode } from '../generator/generate-code';
import { toUnixPath } from '../generator/helpers';
import { GenerateCodeOptions } from '../generator/options';
import { removeDir } from '../utils';

export const generate = async (options: GeneratorOptions) => {
  const outputDir = options.generator.output ?? '';
  await fs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientPath =
    options.otherGenerators.find((it) => it.provider === 'prisma-client-js')
      ?.output ?? null;
  if (prismaClientPath === null) {
    throw new Error(
      'NestJS Generator - Could not resolve `prisma-client-js` path'
    );
  }
  const prismaClientDmmf = require(prismaClientPath)
    .dmmf as PrismaDMMF.Document;

  const config: GenerateCodeOptions = {
    ...options.generator.config,
    outputDirPath: outputDir,
    relativePrismaOutputPath: toUnixPath(
      path.relative(outputDir, prismaClientPath)
    ),
    absolutePrismaOutputPath: prismaClientPath.includes('node_modules')
      ? prismaClientPath.split('node_modules/')[1]
      : undefined,
  };

  if (config.emitDMMF) {
    await Promise.all([
      fs.writeFile(
        path.resolve(outputDir, './dmmf.json'),
        JSON.stringify(options.dmmf, null, 2)
      ),
      fs.writeFile(
        path.resolve(outputDir, './prisma-client-dmmf.json'),
        JSON.stringify(prismaClientDmmf, null, 2)
      ),
    ]);
  }

  // TODO: replace with `options.dmmf` when the spec match prisma client output
  await generateCode(prismaClientDmmf, config);

  return '';
};
