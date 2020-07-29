import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";

@ArgsType()
export class DeleteManyDirectorArgs {
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;
}
