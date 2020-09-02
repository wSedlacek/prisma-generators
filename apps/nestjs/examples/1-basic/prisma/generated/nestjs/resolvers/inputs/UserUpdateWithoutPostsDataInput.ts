import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateWithoutPostsDataInput {
  @ClassTransformer__Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  id?: StringFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  email?: StringFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => NullableStringFieldUpdateOperationsInput)
  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  name?: NullableStringFieldUpdateOperationsInput | null | undefined;
}
