import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyUserArgs {
  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | null | undefined;
}
