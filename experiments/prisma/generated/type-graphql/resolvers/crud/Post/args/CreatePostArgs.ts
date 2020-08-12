import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreatePostArgs {
  @ClassTransformer__Type(() => PostCreateInput)
  @Field(() => PostCreateInput, { nullable: false })
  data!: PostCreateInput;
}
