import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class CreateDirectorArgs {
  @Type(() => DirectorCreateInput)
  @Field(() => DirectorCreateInput, { nullable: false })
  data!: DirectorCreateInput;
}
