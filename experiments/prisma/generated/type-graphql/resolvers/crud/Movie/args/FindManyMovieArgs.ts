import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieOrderByInput } from "../../../inputs/MovieOrderByInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { MovieDistinctFieldEnum } from "../../../../enums/MovieDistinctFieldEnum";

@ArgsType()
export class FindManyMovieArgs {
  @Field(_type => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;

  @Field(_type => MovieOrderByInput, { nullable: true })
  orderBy?: MovieOrderByInput | undefined;

  @Field(_type => MovieWhereUniqueInput, { nullable: true })
  cursor?: MovieWhereUniqueInput | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [MovieDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MovieDistinctFieldEnum> | undefined;
}
