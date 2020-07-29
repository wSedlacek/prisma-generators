import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { PostDistinctFieldEnum } from "../../../../enums/PostDistinctFieldEnum";

@ArgsType()
export class ClientPostsArgs {
  @Field(_type => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @Field(_type => PostOrderByInput, { nullable: true })
  orderBy?: PostOrderByInput | undefined;

  @Field(_type => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [PostDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PostDistinctFieldEnum> | undefined;
}
