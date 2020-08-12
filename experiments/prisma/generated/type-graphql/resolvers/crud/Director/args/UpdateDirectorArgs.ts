import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class UpdateDirectorArgs {
  @ClassTransformer__Type(() => DirectorUpdateInput)
  @Field(() => DirectorUpdateInput, { nullable: false })
  data!: DirectorUpdateInput;

  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;
}
