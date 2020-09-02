import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof SortOrder | null | undefined;
}
