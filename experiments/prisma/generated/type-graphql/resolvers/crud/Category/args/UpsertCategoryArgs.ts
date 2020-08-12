import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertCategoryArgs {
  @ClassTransformer__Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;

  @ClassTransformer__Type(() => CategoryCreateInput)
  @Field(() => CategoryCreateInput, { nullable: false })
  create!: CategoryCreateInput;

  @ClassTransformer__Type(() => CategoryUpdateInput)
  @Field(() => CategoryUpdateInput, { nullable: false })
  update!: CategoryUpdateInput;
}
