import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteCategoryArgs {
  @ClassTransformer__Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}
