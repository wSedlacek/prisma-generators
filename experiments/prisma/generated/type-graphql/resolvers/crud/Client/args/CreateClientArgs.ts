import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreateClientArgs {
  @ClassTransformer__Type(() => ClientCreateInput)
  @Field(() => ClientCreateInput, { nullable: false })
  data!: ClientCreateInput;
}
