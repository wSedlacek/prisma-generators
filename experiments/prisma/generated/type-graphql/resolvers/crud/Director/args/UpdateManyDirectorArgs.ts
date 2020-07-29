import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUpdateManyMutationInput } from "../../../inputs/DirectorUpdateManyMutationInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";

@ArgsType()
export class UpdateManyDirectorArgs {
  @Field(() => DirectorUpdateManyMutationInput, { nullable: false })
  data!: DirectorUpdateManyMutationInput;

  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;
}
