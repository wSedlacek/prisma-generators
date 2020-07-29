import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@ArgsType()
export class UpdateDirectorArgs {
  @Field(() => DirectorUpdateInput, { nullable: false })
  data!: DirectorUpdateInput;

  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;
}
