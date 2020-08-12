import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateClientArgs {
  @ClassTransformer__Type(() => ClientUpdateInput)
  @Field(() => ClientUpdateInput, { nullable: false })
  data!: ClientUpdateInput;

  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;
}
