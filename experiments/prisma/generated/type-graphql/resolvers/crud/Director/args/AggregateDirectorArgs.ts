import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorOrderByInput } from "../../../inputs/DirectorOrderByInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { plainToClass, Type } from "class-transformer";
import { DirectorDistinctFieldEnum } from "../../../../enums/DirectorDistinctFieldEnum";

@ArgsType()
export class AggregateDirectorArgs {
  @Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;

  @Type(() => DirectorOrderByInput)
  @Field(() => DirectorOrderByInput, { nullable: true })
  orderBy?: DirectorOrderByInput | undefined;

  @Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: true })
  cursor?: DirectorWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [DirectorDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DirectorDistinctFieldEnum> | undefined;
}
