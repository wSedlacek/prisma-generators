import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { Type as ClassTransformer__Type } from "class-transformer";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { User } from "../models/User";

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Post {
  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @ClassTransformer__Type(() => Date)
  @Field(() => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @ClassTransformer__Type(() => Date)
  @Field(() => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;

  @Field(() => Boolean, {
    nullable: false,
    description: undefined,
  })
  published!: boolean;

  @Field(() => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
    description: undefined,
  })
  content?: string | null | undefined;

  author?: User | null | undefined;

  @Field(() => String, {
    nullable: true,
    description: undefined,
  })
  authorId?: string | null | undefined;
}
