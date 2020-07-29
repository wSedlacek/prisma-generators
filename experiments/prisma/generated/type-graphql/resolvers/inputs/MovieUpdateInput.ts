import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorUpdateOneRequiredWithoutMoviesInput } from "../inputs/DirectorUpdateOneRequiredWithoutMoviesInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | undefined;

  @Field(_type => DirectorUpdateOneRequiredWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  director?: DirectorUpdateOneRequiredWithoutMoviesInput | undefined;
}
