import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyDirectorArgs {
  @ClassTransformer__Type(() => DirectorWhereInput)
  @Field(() => DirectorWhereInput, { nullable: true })
  where?: DirectorWhereInput | undefined;
}
