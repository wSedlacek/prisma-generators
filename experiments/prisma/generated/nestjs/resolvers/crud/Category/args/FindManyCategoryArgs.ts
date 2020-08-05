import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryOrderByInput } from "../../../inputs/CategoryOrderByInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { CategoryDistinctFieldEnum } from "../../../../enums/CategoryDistinctFieldEnum";

@ArgsType()
export class FindManyCategoryArgs {
  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;

  @ClassTransformer__Type(() => CategoryOrderByInput)
  @Field(() => [CategoryOrderByInput], { nullable: true })
  orderBy?: CategoryOrderByInput[] | undefined;

  @ClassTransformer__Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: true })
  cursor?: CategoryWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [CategoryDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CategoryDistinctFieldEnum> | undefined;
}
