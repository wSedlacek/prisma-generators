import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostListRelationFilter {
  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PostWhereInput | undefined;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PostWhereInput | undefined;

  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PostWhereInput | undefined;
}
