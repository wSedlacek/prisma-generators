import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleFilter {
  @Field(() => Role, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof Role | undefined;

  @Field(() => Role, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof Role | undefined;

  @Field(() => [Role], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof Role> | undefined;

  @Field(() => [Role], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof Role> | undefined;
}
