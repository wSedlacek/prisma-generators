import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";

@ArgsType()
export class DeleteManyClientArgs {
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;
}
