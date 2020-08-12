import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateMovieArgs {
  @ClassTransformer__Type(() => MovieUpdateInput)
  @Field(() => MovieUpdateInput, { nullable: false })
  data!: MovieUpdateInput;

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;
}
