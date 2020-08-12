import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput } from "../inputs/DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieWhereUniqueInput {
  @ClassTransformer__Type(() => DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput)
  @Field(() => DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  directorFirstName_directorLastName_title?: DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput | undefined;
}
