import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsDataInput } from "../inputs/ClientUpdateWithoutPostsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpsertWithoutPostsInput {
  @Field(_type => ClientUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ClientUpdateWithoutPostsDataInput;

  @Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutPostsInput;
}
