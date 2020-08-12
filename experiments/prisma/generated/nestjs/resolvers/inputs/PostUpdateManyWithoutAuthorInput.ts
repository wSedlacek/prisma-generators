import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereNestedInput } from "../inputs/PostUpdateManyWithWhereNestedInput";
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PostUpdateWithWhereUniqueWithoutAuthorInput";
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PostUpsertWithWhereUniqueWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithoutAuthorInput {
  @ClassTransformer__Type(() => PostCreateWithoutAuthorInput)
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PostWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
  @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @ClassTransformer__Type(() => PostUpdateManyWithWhereNestedInput)
  @Field(() => [PostUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PostUpdateManyWithWhereNestedInput[] | undefined;

  @ClassTransformer__Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PostScalarWhereInput[] | undefined;

  @ClassTransformer__Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
  @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @ClassTransformer__Type(() => PostCreateOrConnectWithoutUserInput)
  @Field(() => [PostCreateOrConnectWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;
}
