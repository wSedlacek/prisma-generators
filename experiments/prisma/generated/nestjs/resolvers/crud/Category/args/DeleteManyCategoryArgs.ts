import { ArgsType, Field, Int } from "@nestjs/graphql";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyCategoryArgs {
  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
