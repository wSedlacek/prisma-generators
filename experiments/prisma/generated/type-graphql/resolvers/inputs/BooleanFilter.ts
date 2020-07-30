import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanFilter {
  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true,
    description: undefined
  })
  not?: boolean | undefined;
}
