import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertClientArgs {
  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;

  @ClassTransformer__Type(() => ClientCreateInput)
  @Field(() => ClientCreateInput, { nullable: false })
  create!: ClientCreateInput;

  @ClassTransformer__Type(() => ClientUpdateInput)
  @Field(() => ClientUpdateInput, { nullable: false })
  update!: ClientUpdateInput;
}
