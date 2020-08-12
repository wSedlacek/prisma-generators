import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
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

  @Type(() => DirectorUpdateOneRequiredWithoutMoviesInput)
  @Field(() => DirectorUpdateOneRequiredWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  director?: DirectorUpdateOneRequiredWithoutMoviesInput | undefined;
}