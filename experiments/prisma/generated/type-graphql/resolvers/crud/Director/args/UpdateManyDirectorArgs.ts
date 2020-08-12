import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorUpdateManyMutationInput } from "../../../inputs/DirectorUpdateManyMutationInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyDirectorArgs {
  @ClassTransformer__Type(() => DirectorUpdateManyMutationInput)
  @Field(() => DirectorUpdateManyMutationInput, { nullable: false })
  data!: DirectorUpdateManyMutationInput;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;
}
