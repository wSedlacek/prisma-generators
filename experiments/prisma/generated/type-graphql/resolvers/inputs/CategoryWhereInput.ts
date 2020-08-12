import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereInput {
  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  slug?: StringFilter | undefined;

  @ClassTransformer__Type(() => IntFilter)
  @Field(() => IntFilter, {
    nullable: true,
    description: undefined
  })
  number?: IntFilter | undefined;

  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: CategoryWhereInput[] | undefined;

  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: CategoryWhereInput[] | undefined;

  @ClassTransformer__Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: CategoryWhereInput[] | undefined;
}
