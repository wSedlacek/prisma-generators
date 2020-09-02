import { promises as fs } from 'fs';

export type ReadGeneratedFile = (filePath: string) => Promise<string>;

export const createReadGeneratedFile = (
  baseDirPath: string
): ReadGeneratedFile => {
  return (filePath: string) =>
    fs.readFile(baseDirPath + filePath, { encoding: 'utf8' });
};
