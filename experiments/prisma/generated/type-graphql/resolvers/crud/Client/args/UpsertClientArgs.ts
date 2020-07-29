import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@ArgsType()
export class UpsertClientArgs {
  @Field(_type => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;

  @Field(_type => ClientCreateInput, { nullable: false })
  create!: ClientCreateInput;

  @Field(_type => ClientUpdateInput, { nullable: false })
  update!: ClientUpdateInput;
}
