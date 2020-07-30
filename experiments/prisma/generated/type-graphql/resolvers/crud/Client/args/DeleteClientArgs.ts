import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteClientArgs {
  @Type(() => ClientWhereUniqueInput)
  @Field(() => ClientWhereUniqueInput, { nullable: false })
  where!: ClientWhereUniqueInput;
}
