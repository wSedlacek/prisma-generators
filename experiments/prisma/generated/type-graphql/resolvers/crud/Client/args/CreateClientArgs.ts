import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class CreateClientArgs {
  @Type(() => ClientCreateInput)
  @Field(() => ClientCreateInput, { nullable: false })
  data!: ClientCreateInput;
}
