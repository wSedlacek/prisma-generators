import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";
import { PostDistinctFieldEnum } from "../../../../enums/PostDistinctFieldEnum";

@ArgsType()
export class AggregatePostArgs {
  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @Type(() => PostOrderByInput)
  @Field(() => PostOrderByInput, { nullable: true })
  orderBy?: PostOrderByInput | undefined;

  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [PostDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PostDistinctFieldEnum> | undefined;
}