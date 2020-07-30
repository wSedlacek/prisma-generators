import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
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
  @Type(() => ClientCreateWithoutPostsInput)
  @Field(() => ClientCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ClientWhereUniqueInput | undefined;

  @Type(() => ClientUpdateWithoutPostsDataInput)
  @Field(() => ClientUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ClientUpdateWithoutPostsDataInput | undefined;

  @Type(() => ClientUpsertWithoutPostsInput)
  @Field(() => ClientUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @Type(() => ClientCreateOrConnectWithoutpostInput)
  @Field(() => ClientCreateOrConnectWithoutpostInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostInput | undefined;
}
