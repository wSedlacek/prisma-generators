import { registerEnumType } from "@nestjs/graphql";

export enum PostKind {
  BLOG = "BLOG",
  ADVERT = "ADVERT"
}
registerEnumType(PostKind, {
  name: "PostKind",
  description: undefined,
});
