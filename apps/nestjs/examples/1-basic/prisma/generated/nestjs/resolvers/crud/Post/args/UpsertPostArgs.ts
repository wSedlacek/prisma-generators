import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertPostArgs {
  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;

  @ClassTransformer__Type(() => PostCreateInput)
  @Field(() => PostCreateInput, { nullable: false })
  create!: PostCreateInput;

  @ClassTransformer__Type(() => PostUpdateInput)
  @Field(() => PostUpdateInput, { nullable: false })
  update!: PostUpdateInput;
}
