import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsDataInput } from "../inputs/UserUpdateWithoutPostsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutPostsInput {
  @ClassTransformer__Type(() => UserUpdateWithoutPostsDataInput)
  @Field(() => UserUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutPostsDataInput;

  @ClassTransformer__Type(() => UserCreateWithoutPostsInput)
  @Field(() => UserCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutPostsInput;
}
