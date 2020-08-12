import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieWhereInput {
  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorLastName?: StringFilter | undefined;

  @ClassTransformer__Type(() => StringFilter)
  @Field(() => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: MovieWhereInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: MovieWhereInput[] | undefined;

  @ClassTransformer__Type(() => MovieWhereInput)
  @Field(() => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: MovieWhereInput[] | undefined;

  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, {
    nullable: true,
    description: undefined
  })
  director?: DirectorWhereInput | undefined;
}
