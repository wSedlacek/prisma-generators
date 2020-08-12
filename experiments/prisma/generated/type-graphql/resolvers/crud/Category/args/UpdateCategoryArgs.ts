import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateCategoryArgs {
  @ClassTransformer__Type(() => CategoryUpdateInput)
  @Field(() => CategoryUpdateInput, { nullable: false })
  data!: CategoryUpdateInput;

  @ClassTransformer__Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
