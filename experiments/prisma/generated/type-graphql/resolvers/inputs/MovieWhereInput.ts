import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  directorLastName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | undefined;

  @Field(_type => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: MovieWhereInput[] | undefined;

  @Field(_type => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: MovieWhereInput[] | undefined;

  @Field(_type => [MovieWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: MovieWhereInput[] | undefined;

  @Field(_type => DirectorWhereInput, {
    nullable: true,
    description: undefined
  })
  director?: DirectorWhereInput | undefined;
}
