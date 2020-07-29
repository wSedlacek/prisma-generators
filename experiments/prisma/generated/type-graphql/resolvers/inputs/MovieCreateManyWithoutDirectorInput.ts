import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieCreateManyWithoutDirectorInput {
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

  @Field(_type => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;
}
