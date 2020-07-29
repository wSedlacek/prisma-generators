import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Category {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  slug!: string;

  @Field(() => Int, {
    nullable: false,
    description: undefined,
  })
  number!: number;
}
