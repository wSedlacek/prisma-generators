import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { ClientCreateOrConnectWithoutpostInput } from "../inputs/ClientCreateOrConnectWithoutpostInput";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateOneWithoutPostsInput {
  @ClassTransformer__Type(() => ClientCreateWithoutPostsInput)
  @Field(() => ClientCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ClientWhereUniqueInput | undefined;

  @ClassTransformer__Type(() => ClientCreateOrConnectWithoutpostInput)
  @Field(() => ClientCreateOrConnectWithoutpostInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostInput | undefined;
}
