import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  directorLastName?: keyof typeof SortOrder | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof SortOrder | undefined;
}
