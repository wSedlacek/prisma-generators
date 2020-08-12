import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class CreateDirectorArgs {
  @ClassTransformer__Type(() => DirectorCreateInput)
  @Field(() => DirectorCreateInput, { nullable: false })
  data!: DirectorCreateInput;
}
