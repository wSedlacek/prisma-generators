import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PatientWhereInput[] | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PatientWhereInput[] | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PatientWhereInput[] | undefined;
}
