import fs from 'fs/promises';
import path from 'path';

export const getDatamodel = async (cwd: string): Promise<string> => {
  const datamodelPath = await (async () => {
    try {
      const potentialPath = path.join(cwd, 'project.prisma');
      await fs.access(potentialPath);

      return potentialPath;
    } catch {
      const potentialPath = path.join(cwd, 'schema.prisma');

      await fs.access(potentialPath).catch(() => {
        throw new Error(`Could not find ${potentialPath}`);
      });

      return potentialPath;
    }
  })();

  return fs.readFile(datamodelPath, 'utf-8');
};
