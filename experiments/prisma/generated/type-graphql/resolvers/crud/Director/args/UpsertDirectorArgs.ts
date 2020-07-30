import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpsertDirectorArgs {
  @Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;

  @Type(() => DirectorCreateInput)
  @Field(() => DirectorCreateInput, { nullable: false })
  create!: DirectorCreateInput;

  @Type(() => DirectorUpdateInput)
  @Field(() => DirectorUpdateInput, { nullable: false })
  update!: DirectorUpdateInput;
}
