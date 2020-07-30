import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpsertClientArgs {
  @Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;

  @Type(() => ClientCreateInput)
  @Field(() => ClientCreateInput, { nullable: false })
  create!: ClientCreateInput;

  @Type(() => ClientUpdateInput)
  @Field(() => ClientUpdateInput, { nullable: false })
  update!: ClientUpdateInput;
}
