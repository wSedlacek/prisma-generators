import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientUpdateManyMutationInput } from "../../../inputs/ClientUpdateManyMutationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyClientArgs {
  @ClassTransformer__Type(() => ClientUpdateManyMutationInput)
  @Field(() => ClientUpdateManyMutationInput, { nullable: false })
  data!: ClientUpdateManyMutationInput;

  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;
}
