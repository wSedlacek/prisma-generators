import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostCreateManyWithoutAuthorInput } from "../inputs/PostCreateManyWithoutAuthorInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null | undefined;

  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null | undefined;

  @ClassTransformer__Type(() => PostCreateManyWithoutAuthorInput)
  @Field(() => PostCreateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostCreateManyWithoutAuthorInput | null | undefined;
}
