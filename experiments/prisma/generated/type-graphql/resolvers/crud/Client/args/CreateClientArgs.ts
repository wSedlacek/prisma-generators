import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";

@ArgsType()
export class CreateClientArgs {
  @Field(_type => ClientCreateInput, { nullable: false })
  data!: ClientCreateInput;
}
