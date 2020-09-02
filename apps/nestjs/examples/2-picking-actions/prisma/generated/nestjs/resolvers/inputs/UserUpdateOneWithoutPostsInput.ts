import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsDataInput } from "../inputs/UserUpdateWithoutPostsDataInput";
import { UserUpsertWithoutPostsInput } from "../inputs/UserUpsertWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutPostsInput {
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

  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null | undefined;

  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null | undefined;

  @ClassTransformer__Type(() => UserUpdateWithoutPostsDataInput)
  @Field(() => UserUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutPostsDataInput | null | undefined;

  @ClassTransformer__Type(() => UserUpsertWithoutPostsInput)
  @Field(() => UserUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutPostsInput | null | undefined;
}
