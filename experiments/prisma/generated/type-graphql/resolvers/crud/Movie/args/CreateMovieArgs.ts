import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreateMovieArgs {
  @ClassTransformer__Type(() => MovieCreateInput)
  @Field(() => MovieCreateInput, { nullable: false })
  data!: MovieCreateInput;
}
