import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostUpdateWithoutAuthorDataInput } from "../inputs/PostUpdateWithoutAuthorDataInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutAuthorDataInput;

  @Field(_type => PostCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutAuthorInput;
}
