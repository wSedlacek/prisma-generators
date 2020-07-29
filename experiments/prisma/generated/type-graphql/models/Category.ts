import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Category {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  slug!: string;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  number!: number;
}
