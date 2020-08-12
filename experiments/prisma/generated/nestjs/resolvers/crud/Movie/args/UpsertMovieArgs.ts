import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertMovieArgs {
  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;

  @ClassTransformer__Type(() => MovieCreateInput)
  @Field(() => MovieCreateInput, { nullable: false })
  create!: MovieCreateInput;

  @ClassTransformer__Type(() => MovieUpdateInput)
  @Field(() => MovieUpdateInput, { nullable: false })
  update!: MovieUpdateInput;
}
