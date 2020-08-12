import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateManyWithoutDirectorInput {
  @ClassTransformer__Type(() => MovieCreateWithoutDirectorInput)
  @Field(() => [MovieCreateWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  create?: MovieCreateWithoutDirectorInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => MovieCreateOrConnectWithoutDirectorInput)
  @Field(() => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;
}
