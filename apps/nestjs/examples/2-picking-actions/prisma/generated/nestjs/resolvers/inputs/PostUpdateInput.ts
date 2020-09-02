import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { Type as ClassTransformer__Type } from "class-transformer";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutPostsInput } from "../inputs/UserUpdateOneWithoutPostsInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateInput {
  @ClassTransformer__Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  id?: StringFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => BoolFieldUpdateOperationsInput)
  @Field(() => BoolFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  published?: BoolFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  title?: StringFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => NullableStringFieldUpdateOperationsInput)
  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFieldUpdateOperationsInput | null | undefined;

  @ClassTransformer__Type(() => UserUpdateOneWithoutPostsInput)
  @Field(() => UserUpdateOneWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserUpdateOneWithoutPostsInput | null | undefined;
}
