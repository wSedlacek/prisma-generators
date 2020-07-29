import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereInput {
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  slug?: StringFilter | undefined;

  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  number?: IntFilter | undefined;

  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoryWhereInput[] | undefined;

  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoryWhereInput[] | undefined;

  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoryWhereInput[] | undefined;
}
