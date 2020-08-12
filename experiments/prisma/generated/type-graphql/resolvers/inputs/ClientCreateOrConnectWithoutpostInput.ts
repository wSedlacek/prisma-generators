import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateOrConnectWithoutpostInput {
  @ClassTransformer__Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ClientWhereUniqueInput;

  @ClassTransformer__Type(() => ClientCreateWithoutPostsInput)
  @Field(() => ClientCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutPostsInput;
}
