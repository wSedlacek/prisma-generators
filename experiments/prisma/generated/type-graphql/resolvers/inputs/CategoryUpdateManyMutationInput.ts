import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyMutationInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  name?: string | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  slug?: string | undefined;

  @Field(() => Int, {
    nullable: true,
    description: undefined
  })
  number?: number | undefined;
}
