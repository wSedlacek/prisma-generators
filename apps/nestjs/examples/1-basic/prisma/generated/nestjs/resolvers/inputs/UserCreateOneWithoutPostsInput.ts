import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutPostsInput {
  @ClassTransformer__Type(() => UserCreateWithoutPostsInput)
  @Field(() => UserCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutPostsInput | null | undefined;

  @ClassTransformer__Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null | undefined;
}
