import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
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
  @Field(_type => [MovieCreateWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  create?: MovieCreateWithoutDirectorInput[] | undefined;

  @Field(_type => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @Field(_type => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @Field(_type => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @Field(_type => [MovieWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @Field(_type => [MovieUpdateWithWhereUniqueWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  update?: MovieUpdateWithWhereUniqueWithoutDirectorInput[] | undefined;

  @Field(_type => [MovieUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: MovieUpdateManyWithWhereNestedInput[] | undefined;

  @Field(_type => [MovieScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;

  @Field(_type => [MovieUpsertWithWhereUniqueWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput[] | undefined;

  @Field(_type => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;
}
