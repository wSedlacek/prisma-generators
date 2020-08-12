import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateManyWithoutAuthorInput {
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

  @ClassTransformer__Type(() => PostCreateOrConnectWithoutUserInput)
  @Field(() => [PostCreateOrConnectWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;
}
