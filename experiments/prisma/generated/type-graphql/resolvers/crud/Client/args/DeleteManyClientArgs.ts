import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyClientArgs {
  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;
}
