import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyDataInput } from "../inputs/PostUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithWhereNestedInput {
  @Field(() => PostScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PostScalarWhereInput;

  @Field(() => PostUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PostUpdateManyDataInput;
}
