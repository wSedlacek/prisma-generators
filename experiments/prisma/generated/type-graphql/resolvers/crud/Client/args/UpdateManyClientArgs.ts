import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUpdateManyMutationInput } from "../../../inputs/ClientUpdateManyMutationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpdateManyClientArgs {
  @Type(() => ClientUpdateManyMutationInput)
  @Field(() => ClientUpdateManyMutationInput, { nullable: false })
  data!: ClientUpdateManyMutationInput;

  @Type(() => ClientWhereInput)
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;
}
