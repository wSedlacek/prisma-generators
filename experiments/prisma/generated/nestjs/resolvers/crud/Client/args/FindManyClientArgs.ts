import { ArgsType, Field, Int } from "@nestjs/graphql";
import { ClientOrderByInput } from "../../../inputs/ClientOrderByInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserDistinctFieldEnum } from "../../../../enums/UserDistinctFieldEnum";

@ArgsType()
export class FindManyClientArgs {
  @ClassTransformer__Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;

  @ClassTransformer__Type(() => ClientOrderByInput)
  @Field(() => ClientOrderByInput, { nullable: true })
  orderBy?: ClientOrderByInput | undefined;

  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: true })
  cursor?: ClientWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [UserDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserDistinctFieldEnum> | undefined;
}