import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class FindOneUserArgs {
  @ClassTransformer__Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
