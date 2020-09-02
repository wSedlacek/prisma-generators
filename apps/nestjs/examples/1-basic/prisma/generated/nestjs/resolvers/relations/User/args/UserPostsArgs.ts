import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostDistinctFieldEnum } from "../../../../enums/PostDistinctFieldEnum";

@ArgsType()
export class UserPostsArgs {
  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | null | undefined;

  @ClassTransformer__Type(() => PostOrderByInput)
  @Field(() => [PostOrderByInput], { nullable: true })
  orderBy?: PostOrderByInput[] | null | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | null | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | null | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | null | undefined;

  @Field(() => [PostDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PostDistinctFieldEnum> | null | undefined;
}
