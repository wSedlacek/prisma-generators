import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorCreateOrConnectWithoutMovieInput } from "../inputs/DirectorCreateOrConnectWithoutMovieInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesDataInput } from "../inputs/DirectorUpdateWithoutMoviesDataInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpdateOneRequiredWithoutMoviesInput {
  @ClassTransformer__Type(() => DirectorCreateWithoutMoviesInput)
  @Field(() => DirectorCreateWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @ClassTransformer__Type(() => DirectorUpdateWithoutMoviesDataInput)
  @Field(() => DirectorUpdateWithoutMoviesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: DirectorUpdateWithoutMoviesDataInput | undefined;

  @ClassTransformer__Type(() => DirectorUpsertWithoutMoviesInput)
  @Field(() => DirectorUpsertWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @ClassTransformer__Type(() => DirectorCreateOrConnectWithoutMovieInput)
  @Field(() => DirectorCreateOrConnectWithoutMovieInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutMovieInput | undefined;
}
