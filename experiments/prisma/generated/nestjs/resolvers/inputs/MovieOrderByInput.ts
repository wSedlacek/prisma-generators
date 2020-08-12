import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { OrderByArg } from "../../enums/OrderByArg";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieOrderByInput {
  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  directorLastName?: keyof typeof OrderByArg | undefined;

  @Field(() => OrderByArg, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof OrderByArg | undefined;
}
