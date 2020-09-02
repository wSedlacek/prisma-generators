import { promises as fs } from 'fs';
import { join } from 'path';

export const removeDir = async (dirPath: string, onlyContent: boolean) => {
  const dirEntries = await fs.readdir(dirPath, { withFileTypes: true });
  await Promise.all(
    dirEntries.map(async (dirEntry) => {
      const fullPath = join(dirPath, dirEntry.name);

      return dirEntry.isDirectory()
        ? removeDir(fullPath, false)
        : fs.unlink(fullPath);
    })
  );
  if (!onlyContent) {
    await fs.rmdir(dirPath);
  }
};
