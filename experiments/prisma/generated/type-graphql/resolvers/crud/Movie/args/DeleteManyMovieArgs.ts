import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyMovieArgs {
  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;
}
