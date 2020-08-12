import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryUpdateManyMutationInput } from "../../../inputs/CategoryUpdateManyMutationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyCategoryArgs {
  @ClassTransformer__Type(() => CategoryUpdateManyMutationInput)
  @Field(() => CategoryUpdateManyMutationInput, { nullable: false })
  data!: CategoryUpdateManyMutationInput;

  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
