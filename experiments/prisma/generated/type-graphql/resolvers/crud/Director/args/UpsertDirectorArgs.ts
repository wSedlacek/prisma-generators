import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpsertDirectorArgs {
  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;

  @ClassTransformer__Type(() => DirectorCreateInput)
  @Field(() => DirectorCreateInput, { nullable: false })
  create!: DirectorCreateInput;

  @ClassTransformer__Type(() => DirectorUpdateInput)
  @Field(() => DirectorUpdateInput, { nullable: false })
  update!: DirectorUpdateInput;
}
