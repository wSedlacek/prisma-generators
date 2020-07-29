import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieOrderByInput } from "../../../inputs/MovieOrderByInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { MovieDistinctFieldEnum } from "../../../../enums/MovieDistinctFieldEnum";

@ArgsType()
export class DirectorMoviesArgs {
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;

  @Field(() => MovieOrderByInput, { nullable: true })
  orderBy?: MovieOrderByInput | undefined;

  @Field(() => MovieWhereUniqueInput, { nullable: true })
  cursor?: MovieWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [MovieDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MovieDistinctFieldEnum> | undefined;
}
