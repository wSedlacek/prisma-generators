import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class DeleteManyDirectorArgs {
  @Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;
}
