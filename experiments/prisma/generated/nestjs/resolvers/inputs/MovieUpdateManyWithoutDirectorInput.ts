import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereNestedInput } from "../inputs/MovieUpdateManyWithWhereNestedInput";
import { MovieUpdateWithWhereUniqueWithoutDirectorInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutDirectorInput";
import { MovieUpsertWithWhereUniqueWithoutDirectorInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateManyWithoutDirectorInput {
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

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @ClassTransformer__Type(() => MovieUpdateWithWhereUniqueWithoutDirectorInput)
  @Field(() => [MovieUpdateWithWhereUniqueWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  update?: MovieUpdateWithWhereUniqueWithoutDirectorInput[] | undefined;

  @ClassTransformer__Type(() => MovieUpdateManyWithWhereNestedInput)
  @Field(() => [MovieUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: MovieUpdateManyWithWhereNestedInput[] | undefined;

  @ClassTransformer__Type(() => MovieScalarWhereInput)
  @Field(() => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;

  @ClassTransformer__Type(() => MovieUpsertWithWhereUniqueWithoutDirectorInput)
  @Field(() => [MovieUpsertWithWhereUniqueWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput[] | undefined;

  @ClassTransformer__Type(() => MovieCreateOrConnectWithoutDirectorInput)
  @Field(() => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;
}
