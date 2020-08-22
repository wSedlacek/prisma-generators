import * as path from 'path';
import { promises as fs } from 'fs';

import removeDir from '../../src/utils/removeDir';
import ensurePrismaEngine from './ensure-engine';

const setupTests = async () => {
  const artifactsDirPath = path.join(__dirname, '../artifacts');

  try {
    await fs.access(artifactsDirPath);
    console.log('Cleaning artifacts dir...');
    await removeDir(path.join(__dirname, '../artifacts'), true);
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
