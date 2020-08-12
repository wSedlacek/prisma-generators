import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsDataInput } from "../inputs/ClientUpdateWithoutPostsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpsertWithoutPostsInput {
  @ClassTransformer__Type(() => ClientUpdateWithoutPostsDataInput)
  @Field(() => ClientUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ClientUpdateWithoutPostsDataInput;

  @ClassTransformer__Type(() => ClientCreateWithoutPostsInput)
  @Field(() => ClientCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutPostsInput;
}
