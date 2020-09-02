import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Type as ClassTransformer__Type } from "class-transformer";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Post } from "../models/Post";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null | undefined;

  posts?: Post[] | null | undefined;
}
