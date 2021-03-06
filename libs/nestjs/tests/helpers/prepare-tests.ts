import 'tslint-override/angular-register';

import { promises as fs } from 'fs';
import { join } from 'path';

import { removeDir } from '../../src/utils';
import { ensurePrismaEngine } from './ensure-engine';

const setupTests = async () => {
  const artifactsDirPath = join(__dirname, '../artifacts');

  try {
    await fs.access(artifactsDirPath);
    console.log('Cleaning artifacts dir...');
    await removeDir(artifactsDirPath, true);
    console.log('Cleaned!');
  } catch {
    console.log('Could not find artifacts dir. Skipping cleaning...');
  }

  await ensurePrismaEngine();
};

setupTests()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
