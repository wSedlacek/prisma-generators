import { ArgsType, Field, Int } from "@nestjs/graphql";
import { UserOrderByInput } from "../../../inputs/UserOrderByInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserDistinctFieldEnum } from "../../../../enums/UserDistinctFieldEnum";

@ArgsType()
export class FindManyUserArgs {
  @ClassTransformer__Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | null | undefined;

  @ClassTransformer__Type(() => UserOrderByInput)
  @Field(() => [UserOrderByInput], { nullable: true })
  orderBy?: UserOrderByInput[] | null | undefined;

  @ClassTransformer__Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | null | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | null | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | null | undefined;

  @Field(() => [UserDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserDistinctFieldEnum> | null | undefined;
}
