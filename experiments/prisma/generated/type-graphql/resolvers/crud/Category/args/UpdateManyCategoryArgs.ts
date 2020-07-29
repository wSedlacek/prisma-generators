import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUpdateManyMutationInput } from "../../../inputs/CategoryUpdateManyMutationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";

@ArgsType()
export class UpdateManyCategoryArgs {
  @Field(_type => CategoryUpdateManyMutationInput, { nullable: false })
  data!: CategoryUpdateManyMutationInput;

  @Field(_type => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
