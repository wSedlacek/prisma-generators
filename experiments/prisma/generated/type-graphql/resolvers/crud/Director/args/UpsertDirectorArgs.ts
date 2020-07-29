import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@ArgsType()
export class UpsertDirectorArgs {
  @Field(_type => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;

  @Field(_type => DirectorCreateInput, { nullable: false })
  create!: DirectorCreateInput;

  @Field(_type => DirectorUpdateInput, { nullable: false })
  update!: DirectorUpdateInput;
}
