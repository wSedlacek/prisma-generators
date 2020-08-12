import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreateCategoryArgs {
  @ClassTransformer__Type(() => CategoryCreateInput)
  @Field(() => CategoryCreateInput, { nullable: false })
  data!: CategoryCreateInput;
}
