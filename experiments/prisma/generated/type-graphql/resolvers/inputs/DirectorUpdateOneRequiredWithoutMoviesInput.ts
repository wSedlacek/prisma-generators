import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateOrConnectWithoutMovieInput } from "../inputs/DirectorCreateOrConnectWithoutMovieInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesDataInput } from "../inputs/DirectorUpdateWithoutMoviesDataInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpdateOneRequiredWithoutMoviesInput {
  @Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @Field(_type => DirectorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @Field(_type => DirectorUpdateWithoutMoviesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: DirectorUpdateWithoutMoviesDataInput | undefined;

  @Field(_type => DirectorUpsertWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @Field(_type => DirectorCreateOrConnectWithoutMovieInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutMovieInput | undefined;
}
