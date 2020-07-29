import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateOrConnectWithoutMovieInput } from "../inputs/DirectorCreateOrConnectWithoutMovieInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorCreateOneWithoutMoviesInput {
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

  @Field(_type => DirectorCreateOrConnectWithoutMovieInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutMovieInput | undefined;
}
