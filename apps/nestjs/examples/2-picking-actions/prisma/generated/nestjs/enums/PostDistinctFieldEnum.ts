import { registerEnumType } from "@nestjs/graphql";

export enum PostDistinctFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  published = "published",
  title = "title",
  content = "content",
  authorId = "authorId"
}
registerEnumType(PostDistinctFieldEnum, {
  name: "PostDistinctFieldEnum",
  description: undefined,
});
