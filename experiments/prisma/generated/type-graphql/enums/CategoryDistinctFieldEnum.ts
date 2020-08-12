import { registerEnumType } from "@nestjs/graphql";

export enum CategoryDistinctFieldEnum {
  name = "name",
  slug = "slug",
  number = "number"
}
registerEnumType(CategoryDistinctFieldEnum, {
  name: "CategoryDistinctFieldEnum",
  description: undefined,
});
