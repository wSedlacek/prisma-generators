import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUpdateManyMutationInput } from "../../../inputs/ClientUpdateManyMutationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";

@ArgsType()
export class UpdateManyClientArgs {
  @Field(() => ClientUpdateManyMutationInput, { nullable: false })
  data!: ClientUpdateManyMutationInput;

  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;
}
