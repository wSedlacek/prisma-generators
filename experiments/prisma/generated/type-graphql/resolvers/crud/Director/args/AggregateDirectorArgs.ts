import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorOrderByInput } from "../../../inputs/DirectorOrderByInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { DirectorDistinctFieldEnum } from "../../../../enums/DirectorDistinctFieldEnum";

@ArgsType()
export class AggregateDirectorArgs {
  @Field(_type => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;

  @Field(_type => DirectorOrderByInput, { nullable: true })
  orderBy?: DirectorOrderByInput | undefined;

  @Field(_type => DirectorWhereUniqueInput, { nullable: true })
  cursor?: DirectorWhereUniqueInput | undefined;

  @Field(_type => Int, { nullable: true })
  take?: number | undefined;

  @Field(_type => Int, { nullable: true })
  skip?: number | undefined;

  @Field(_type => [DirectorDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DirectorDistinctFieldEnum> | undefined;
}
