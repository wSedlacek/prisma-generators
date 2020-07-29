import { ClientRelationsResolver } from "./Client/ClientRelationsResolver";
import { DirectorRelationsResolver } from "./Director/DirectorRelationsResolver";
import { MovieRelationsResolver } from "./Movie/MovieRelationsResolver";
import { PostRelationsResolver } from "./Post/PostRelationsResolver";
import { Module } from "@nestjs/common";

export { ClientRelationsResolver } from "./Client/ClientRelationsResolver";
export * from "./Client/args";
export { DirectorRelationsResolver } from "./Director/DirectorRelationsResolver";
export * from "./Director/args";
export { MovieRelationsResolver } from "./Movie/MovieRelationsResolver";
export { PostRelationsResolver } from "./Post/PostRelationsResolver";

@Module({
  providers: [
    ClientRelationsResolver,
    DirectorRelationsResolver,
    MovieRelationsResolver,
    PostRelationsResolver
  ],
  exports: [
    ClientRelationsResolver,
    DirectorRelationsResolver,
    MovieRelationsResolver,
    PostRelationsResolver
  ]
})
export class RelationsResolversModule {
}
