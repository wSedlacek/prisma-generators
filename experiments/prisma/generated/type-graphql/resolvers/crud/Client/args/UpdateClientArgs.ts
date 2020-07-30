import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpdateClientArgs {
  @Type(() => ClientUpdateInput)
  @Field(() => ClientUpdateInput, { nullable: false })
  data!: ClientUpdateInput;

  @Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;
}
