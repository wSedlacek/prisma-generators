import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostUpdateManyMutationInput } from "../../../inputs/PostUpdateManyMutationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyPostArgs {
  @ClassTransformer__Type(() => PostUpdateManyMutationInput)
  @Field(() => PostUpdateManyMutationInput, { nullable: false })
  data!: PostUpdateManyMutationInput;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
