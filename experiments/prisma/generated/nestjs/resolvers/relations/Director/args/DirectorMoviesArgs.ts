import { ArgsType, Field, Int } from "@nestjs/graphql";
import { MovieOrderByInput } from "../../../inputs/MovieOrderByInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { MovieDistinctFieldEnum } from "../../../../enums/MovieDistinctFieldEnum";

@ArgsType()
export class DirectorMoviesArgs {
  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => MovieWhereInput, { nullable: true })
  where?: MovieWhereInput | undefined;

  @ClassTransformer__Type(() => MovieOrderByInput)
  @Field(() => [MovieOrderByInput], { nullable: true })
  orderBy?: MovieOrderByInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereUniqueInput)
  @Field(() => MovieWhereUniqueInput, { nullable: true })
  cursor?: MovieWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [MovieDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MovieDistinctFieldEnum> | undefined;
}
