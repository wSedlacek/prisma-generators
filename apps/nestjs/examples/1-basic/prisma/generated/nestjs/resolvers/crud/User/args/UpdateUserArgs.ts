import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateUserArgs {
  @ClassTransformer__Type(() => UserUpdateInput)
  @Field(() => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;

  @ClassTransformer__Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
