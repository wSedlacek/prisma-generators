import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieUpdateManyMutationInput } from "../../../inputs/MovieUpdateManyMutationInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateManyMovieArgs {
  @ClassTransformer__Type(() => MovieUpdateManyMutationInput)
  @Field(() => MovieUpdateManyMutationInput, { nullable: false })
  data!: MovieUpdateManyMutationInput;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;
}
