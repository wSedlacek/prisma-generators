import { getDMMF } from '@prisma/client/runtime';
import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { promises as fs } from 'fs';

import { getDatamodel } from './get-datamodel';

export const writeDmmf = async (cwd: string, dmmfJSONPath: string) => {
  try {
    const datamodel = await getDatamodel(cwd);
    const dmmf: PrismaDMMF.Document = await getDMMF({ datamodel, cwd });
    console.log('Writing dmmf...');
    await fs.writeFile(dmmfJSONPath, JSON.stringify(dmmf, null, 2));
  } catch (err) {
    console.error('Something went wrong:', err);
  }
};
