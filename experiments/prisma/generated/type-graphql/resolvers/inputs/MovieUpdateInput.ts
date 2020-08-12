import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorUpdateOneRequiredWithoutMoviesInput } from "../inputs/DirectorUpdateOneRequiredWithoutMoviesInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateInput {
  @Field(() => String, {
    nullable: true,
    description: undefined
  })
  title?: string | undefined;

  @ClassTransformer__Type(() => DirectorUpdateOneRequiredWithoutMoviesInput)
  @Field(() => DirectorUpdateOneRequiredWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  director?: DirectorUpdateOneRequiredWithoutMoviesInput | undefined;
}
