import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SortOrder } from "../../enums/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  published?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  content?: keyof typeof SortOrder | null | undefined;

  @Field(() => SortOrder, {
    nullable: true,
    description: undefined
  })
  authorId?: keyof typeof SortOrder | null | undefined;
}
