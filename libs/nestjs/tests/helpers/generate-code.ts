import { generateCode } from '../../src/generator/generate-code';
import { GenerateCodeOptions } from '../../src/generator/options';
import { getPrismaClientDmmfFromPrismaSchema } from './dmmf';

type SupportedPreviewFeatures = 'connectOrCreate';

interface GenerateCodeFromSchemaOptions
  extends Omit<GenerateCodeOptions, 'relativePrismaOutputPath'> {
  enabledPreviewFeatures?: SupportedPreviewFeatures[];
}

export const generateCodeFromSchema = async (
  schema: string,
  options: GenerateCodeFromSchemaOptions
): Promise<void> => {
  await generateCode(
    await getPrismaClientDmmfFromPrismaSchema(
      schema,
      options.enabledPreviewFeatures
    ),
    {
      ...options,
      relativePrismaOutputPath: '../../helpers/prisma-client-mock',
    }
  );
};
