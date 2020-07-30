import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class FindOneDirectorArgs {
  @Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;
}
