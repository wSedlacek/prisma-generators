import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieUpdateManyMutationInput } from "../../../inputs/MovieUpdateManyMutationInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";

@ArgsType()
export class UpdateManyMovieArgs {
  @Field(_type => MovieUpdateManyMutationInput, { nullable: false })
  data!: MovieUpdateManyMutationInput;

  @Field(_type => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;
}
