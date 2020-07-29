import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryOrderByInput } from "../../../inputs/CategoryOrderByInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { CategoryDistinctFieldEnum } from "../../../../enums/CategoryDistinctFieldEnum";

@ArgsType()
export class FindManyCategoryArgs {
  @Field(_type => CategoryWhereInput, { nullable: true })
  where?: CategoryWhereInput | undefined;

  @Field(_type => CategoryOrderByInput, { nullable: true })
  orderBy?: CategoryOrderByInput | undefined;

  @Field(_type => CategoryWhereUniqueInput, { nullable: true })
  cursor?: CategoryWhereUniqueInput | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [CategoryDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CategoryDistinctFieldEnum> | undefined;
}
