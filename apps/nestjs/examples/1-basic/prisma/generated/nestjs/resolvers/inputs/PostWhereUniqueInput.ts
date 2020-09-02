import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereUniqueInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null | undefined;
}
