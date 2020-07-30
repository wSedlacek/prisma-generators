import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUpdateManyMutationInput } from "../../../inputs/CategoryUpdateManyMutationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpdateManyCategoryArgs {
  @Type(() => CategoryUpdateManyMutationInput)
  @Field(() => CategoryUpdateManyMutationInput, { nullable: false })
  data!: CategoryUpdateManyMutationInput;

  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;
}
