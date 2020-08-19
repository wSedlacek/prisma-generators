import { getDMMF } from '@prisma/client/runtime';
import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import * as fs from 'fs/promises';

import { getDatamodel } from './getDatamodel';

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
