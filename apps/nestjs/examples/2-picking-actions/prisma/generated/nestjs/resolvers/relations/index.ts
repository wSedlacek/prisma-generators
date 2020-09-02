import { PostRelationsResolver } from "./Post/PostRelationsResolver";
import { UserRelationsResolver } from "./User/UserRelationsResolver";
import { Module } from "@nestjs/common";

export { PostRelationsResolver } from "./Post/PostRelationsResolver";
export { UserRelationsResolver } from "./User/UserRelationsResolver";
export * from "./User/args";

@Module({
  providers: [
    PostRelationsResolver,
    UserRelationsResolver
  ],
  exports: [
    PostRelationsResolver,
    UserRelationsResolver
  ]
})
export class RelationsResolversModule {
}
