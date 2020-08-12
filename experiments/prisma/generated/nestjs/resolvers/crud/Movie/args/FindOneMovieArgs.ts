import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class FindOneMovieArgs {
  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;
}
