import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeleteManyPostArgs {
  @ClassTransformer__Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}
