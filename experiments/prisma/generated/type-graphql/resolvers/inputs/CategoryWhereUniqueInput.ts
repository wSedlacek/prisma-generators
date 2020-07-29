import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { SlugNumberCompoundUniqueInput } from "../inputs/SlugNumberCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereUniqueInput {
  @Field(_type => SlugNumberCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  slug_number?: SlugNumberCompoundUniqueInput | undefined;
}
