import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserUpdateManyMutationInput } from "../../../inputs/UserUpdateManyMutationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyUserArgs {
  @ClassTransformer__Type(() => UserUpdateManyMutationInput)
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  data!: UserUpdateManyMutationInput;

  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | null | undefined;
}
