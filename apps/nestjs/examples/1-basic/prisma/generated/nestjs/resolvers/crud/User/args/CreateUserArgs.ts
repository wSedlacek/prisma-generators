import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreateUserArgs {
  @ClassTransformer__Type(() => UserCreateInput)
  @Field(() => UserCreateInput, { nullable: false })
  data!: UserCreateInput;
}
