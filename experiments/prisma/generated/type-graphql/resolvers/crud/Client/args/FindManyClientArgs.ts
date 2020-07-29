import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientOrderByInput } from "../../../inputs/ClientOrderByInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { UserDistinctFieldEnum } from "../../../../enums/UserDistinctFieldEnum";

@ArgsType()
export class FindManyClientArgs {
  @Field(() => ClientWhereInput, { nullable: true })
  where?: ClientWhereInput | undefined;

  @Field(() => ClientOrderByInput, { nullable: true })
  orderBy?: ClientOrderByInput | undefined;

  @Field(() => ClientWhereUniqueInput, { nullable: true })
  cursor?: ClientWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [UserDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserDistinctFieldEnum> | undefined;
}
