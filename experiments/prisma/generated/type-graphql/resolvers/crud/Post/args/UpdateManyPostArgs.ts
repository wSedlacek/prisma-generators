import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUpdateManyMutationInput } from "../../../inputs/PostUpdateManyMutationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { plainToClass, Type } from "class-transformer";

@ArgsType()
export class UpdateManyPostArgs {
  @Type(() => PostUpdateManyMutationInput)
  @Field(() => PostUpdateManyMutationInput, { nullable: false })
  data!: PostUpdateManyMutationInput;

  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
