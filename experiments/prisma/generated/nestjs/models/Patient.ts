import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../client";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Patient {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  firstName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;
}
