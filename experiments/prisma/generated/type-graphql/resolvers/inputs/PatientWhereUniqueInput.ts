import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { plainToClass, Type } from "class-transformer";
import { FirstNameLastNameCompoundUniqueInput } from "../inputs/FirstNameLastNameCompoundUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereUniqueInput {
  @Type(() => FirstNameLastNameCompoundUniqueInput)
  @Field(() => FirstNameLastNameCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  firstName_lastName?: FirstNameLastNameCompoundUniqueInput | undefined;
}
