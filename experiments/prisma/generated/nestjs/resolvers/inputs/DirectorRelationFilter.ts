import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorRelationFilter {
  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: DirectorWhereInput | undefined;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: DirectorWhereInput | undefined;
}
