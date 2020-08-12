import { registerEnumType } from "@nestjs/graphql";

export enum PostDistinctFieldEnum {
  uuid = "uuid",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  published = "published",
  title = "title",
  content = "content",
  authorId = "authorId",
  kind = "kind",
  metadata = "metadata"
}
registerEnumType(PostDistinctFieldEnum, {
  name: "PostDistinctFieldEnum",
  description: undefined,
});
