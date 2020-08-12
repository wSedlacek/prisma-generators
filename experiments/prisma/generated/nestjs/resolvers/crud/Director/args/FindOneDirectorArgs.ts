import { ArgsType, Field, Int } from "@nestjs/graphql";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class FindOneDirectorArgs {
  @ClassTransformer__Type(() => DirectorWhereUniqueInput)
  @Field(() => DirectorWhereUniqueInput, { nullable: false })
  where!: DirectorWhereUniqueInput;
}
