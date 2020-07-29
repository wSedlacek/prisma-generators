import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateOrConnectWithoutpostInput {
  @Field(_type => ClientWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ClientWhereUniqueInput;

  @Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutPostsInput;
}
