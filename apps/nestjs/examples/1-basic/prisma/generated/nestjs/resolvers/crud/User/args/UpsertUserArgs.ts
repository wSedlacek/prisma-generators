import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertUserArgs {
  @ClassTransformer__Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @ClassTransformer__Type(() => UserCreateInput)
  @Field(() => UserCreateInput, { nullable: false })
  create!: UserCreateInput;

  @ClassTransformer__Type(() => UserUpdateInput)
  @Field(() => UserUpdateInput, { nullable: false })
  update!: UserUpdateInput;
}
