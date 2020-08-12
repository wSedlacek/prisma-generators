import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorCreateOrConnectWithoutMovieInput {
  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: DirectorWhereUniqueInput;

  @ClassTransformer__Type(() => DirectorCreateWithoutMoviesInput)
  @Field(() => DirectorCreateWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  create!: DirectorCreateWithoutMoviesInput;
}
