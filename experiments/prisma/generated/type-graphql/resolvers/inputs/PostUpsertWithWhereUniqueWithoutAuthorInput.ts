import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostUpdateWithoutAuthorDataInput } from "../inputs/PostUpdateWithoutAuthorDataInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @ClassTransformer__Type(() => PostUpdateWithoutAuthorDataInput)
  @Field(() => PostUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutAuthorDataInput;

  @ClassTransformer__Type(() => PostCreateWithoutAuthorInput)
  @Field(() => PostCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutAuthorInput;
}
