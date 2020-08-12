import { ArgsType, Field, Int } from "@nestjs/graphql";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { Type as ClassTransformer__Type } from "class-transformer";

@ArgsType()
export class DeletePostArgs {
  @ClassTransformer__Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}
