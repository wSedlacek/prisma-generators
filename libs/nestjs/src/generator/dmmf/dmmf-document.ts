import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { GenerateCodeOptions } from '../options';
import {
  generateRelationModel,
  transformBareModel,
  transformEnums,
  transformMappings,
  transformModelWithFields,
  transformSchema,
} from './transform';
import { DMMF } from './types';

export class DmmfDocument implements DMMF.Document {
  private readonly models: DMMF.Model[];
  @Override()
  public datamodel: DMMF.Datamodel;
  @Override()
  public schema: DMMF.Schema;
  public enums: DMMF.Enum[];
  @Override()
  public mappings: DMMF.Mapping[];

  public relationModels: DMMF.RelationModel[];

  constructor(
    { datamodel, schema, mappings }: PrismaDMMF.Document,
    public options: GenerateCodeOptions
  ) {
    // transform bare model without fields
    this.models = datamodel.models.map(transformBareModel);
    // then transform once again to map the fields (it requires mapped model type names)
    this.models = datamodel.models.map(transformModelWithFields(this));

    this.datamodel = {
      models: this.models,
      enums: datamodel.enums.map(transformEnums(this)),
    };
    this.enums = schema.enums.map(transformEnums(this));
    this.schema = {
      ...transformSchema(schema, this),
      enums: this.enums,
    };
    this.mappings = transformMappings(mappings, this, options);
    this.relationModels = this.models
      .filter((model) =>
        model.fields.some((field) => field.relationName !== undefined)
      )
      .map(generateRelationModel(this));
  }

  public getModelTypeName(modelName: string): string | undefined {
    if (typeof modelName === 'number') return undefined;

    const model = this.models.find(
      (it) => it.name.toLocaleLowerCase() === modelName.toLocaleLowerCase()
    );

    return model?.typeName;
  }

  public isModelName(typeName: string): boolean {
    return this.models.some((it) => it.name === typeName);
  }

  public isModelTypeName(typeName: string): boolean {
    return this.models.some((it) => it.typeName === typeName);
  }

  public getModelFieldAlias(
    modelName: string,
    fieldName: string
  ): string | undefined {
    const model = this.models.find((it) => it.name === modelName);

    return model?.fields.find((it) => it.name === fieldName)?.typeFieldAlias;
  }
}
