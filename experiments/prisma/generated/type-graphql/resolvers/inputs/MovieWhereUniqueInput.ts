import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput } from "../inputs/DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieWhereUniqueInput {
  @Type(() => DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput)
  @Field(() => DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  directorFirstName_directorLastName_title?: DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput | undefined;
}