import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { SlugNumberCompoundUniqueInput } from "../inputs/SlugNumberCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereUniqueInput {
  @ClassTransformer__Type(() => SlugNumberCompoundUniqueInput)
  @Field(() => SlugNumberCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  slug_number?: SlugNumberCompoundUniqueInput | undefined;
}
