import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorOrderByInput } from "../../../inputs/DirectorOrderByInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";
import { DirectorDistinctFieldEnum } from "../../../../enums/DirectorDistinctFieldEnum";

@ArgsType()
export class FindManyDirectorArgs {
  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;

  @ClassTransformer__Type(() => DirectorOrderByInput)
  @Field(() => [DirectorOrderByInput], { nullable: true })
  orderBy?: DirectorOrderByInput[] | undefined;

  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: true })
  cursor?: DirectorWhereUniqueInput | undefined;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  take?: number | undefined;

  @Field(() => Int, { nullable: true })
  skip?: number | undefined;

  @Field(() => [DirectorDistinctFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DirectorDistinctFieldEnum> | undefined;
}
