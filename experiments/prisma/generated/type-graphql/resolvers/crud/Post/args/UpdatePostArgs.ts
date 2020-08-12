import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdatePostArgs {
  @ClassTransformer__Type(() => PostUpdateInput)
  @Field(() => PostUpdateInput, { nullable: false })
  data!: PostUpdateInput;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}
