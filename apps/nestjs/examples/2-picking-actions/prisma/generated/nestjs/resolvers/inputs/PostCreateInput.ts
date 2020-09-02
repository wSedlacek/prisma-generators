import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null | undefined;

  @Field(() => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null | undefined;

  @Field(() => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null | undefined;

  @ClassTransformer__Type(() => UserCreateOneWithoutPostsInput)
  @Field(() => UserCreateOneWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserCreateOneWithoutPostsInput | null | undefined;
}
