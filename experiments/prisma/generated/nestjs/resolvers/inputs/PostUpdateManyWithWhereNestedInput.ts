import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyDataInput } from "../inputs/PostUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithWhereNestedInput {
  @ClassTransformer__Type(() => PostScalarWhereInput)
  @Field(() => PostScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PostScalarWhereInput;

  @ClassTransformer__Type(() => PostUpdateManyDataInput)
  @Field(() => PostUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PostUpdateManyDataInput;
}
