import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@ArgsType()
export class UpdateClientArgs {
  @Field(_type => ClientUpdateInput, { nullable: false })
  data!: ClientUpdateInput;

  @Field(_type => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;
}
