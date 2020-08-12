import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostDistinctFieldEnum } from "../../../../enums/PostDistinctFieldEnum";

@ArgsType()
export class ClientPostsArgs {
  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @ClassTransformer__Type(() => PostOrderByInput)
  @Field(() => PostOrderByInput, { nullable: true })
  orderBy?: PostOrderByInput | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [PostDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PostDistinctFieldEnum> | undefined;
}
