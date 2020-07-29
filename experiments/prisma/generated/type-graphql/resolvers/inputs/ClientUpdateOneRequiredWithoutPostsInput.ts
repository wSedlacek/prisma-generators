import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateOrConnectWithoutpostInput } from "../inputs/ClientCreateOrConnectWithoutpostInput";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsDataInput } from "../inputs/ClientUpdateWithoutPostsDataInput";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpdateOneRequiredWithoutPostsInput {
  @Field(_type => ClientCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @Field(_type => ClientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ClientWhereUniqueInput | undefined;

  @Field(_type => ClientUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ClientUpdateWithoutPostsDataInput | undefined;

  @Field(_type => ClientUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @Field(_type => ClientCreateOrConnectWithoutpostInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostInput | undefined;
}
