import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteClientArgs {
  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;
}
