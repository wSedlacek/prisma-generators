import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@ArgsType()
export class DeleteDirectorArgs {
  @Field(_type => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;
}
