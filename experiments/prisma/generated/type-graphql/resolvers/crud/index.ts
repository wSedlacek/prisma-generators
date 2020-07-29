import { CategoryCrudResolver } from "./Category/CategoryCrudResolver";
import { ClientCrudResolver } from "./Client/ClientCrudResolver";
import { DirectorCrudResolver } from "./Director/DirectorCrudResolver";
import { MovieCrudResolver } from "./Movie/MovieCrudResolver";
import { PatientCrudResolver } from "./Patient/PatientCrudResolver";
import { PostCrudResolver } from "./Post/PostCrudResolver";
import { Module } from "@nestjs/common";

export { CategoryCrudResolver } from "./Category/CategoryCrudResolver";
export { FindOneCategoryResolver } from "./Category/FindOneCategoryResolver";
export { FindManyCategoryResolver } from "./Category/FindManyCategoryResolver";
export { CreateCategoryResolver } from "./Category/CreateCategoryResolver";
export { DeleteCategoryResolver } from "./Category/DeleteCategoryResolver";
export { UpdateCategoryResolver } from "./Category/UpdateCategoryResolver";
export { DeleteManyCategoryResolver } from "./Category/DeleteManyCategoryResolver";
export { UpdateManyCategoryResolver } from "./Category/UpdateManyCategoryResolver";
export { UpsertCategoryResolver } from "./Category/UpsertCategoryResolver";
export { AggregateCategoryResolver } from "./Category/AggregateCategoryResolver";
export * from "./Category/args";
export { ClientCrudResolver } from "./Client/ClientCrudResolver";
export { FindOneClientResolver } from "./Client/FindOneClientResolver";
export { FindManyClientResolver } from "./Client/FindManyClientResolver";
export { CreateClientResolver } from "./Client/CreateClientResolver";
export { DeleteClientResolver } from "./Client/DeleteClientResolver";
export { UpdateClientResolver } from "./Client/UpdateClientResolver";
export { DeleteManyClientResolver } from "./Client/DeleteManyClientResolver";
export { UpdateManyClientResolver } from "./Client/UpdateManyClientResolver";
export { UpsertClientResolver } from "./Client/UpsertClientResolver";
export { AggregateClientResolver } from "./Client/AggregateClientResolver";
export * from "./Client/args";
export { DirectorCrudResolver } from "./Director/DirectorCrudResolver";
export { FindOneDirectorResolver } from "./Director/FindOneDirectorResolver";
export { FindManyDirectorResolver } from "./Director/FindManyDirectorResolver";
export { CreateDirectorResolver } from "./Director/CreateDirectorResolver";
export { DeleteDirectorResolver } from "./Director/DeleteDirectorResolver";
export { UpdateDirectorResolver } from "./Director/UpdateDirectorResolver";
export { DeleteManyDirectorResolver } from "./Director/DeleteManyDirectorResolver";
export { UpdateManyDirectorResolver } from "./Director/UpdateManyDirectorResolver";
export { UpsertDirectorResolver } from "./Director/UpsertDirectorResolver";
export { AggregateDirectorResolver } from "./Director/AggregateDirectorResolver";
export * from "./Director/args";
export { MovieCrudResolver } from "./Movie/MovieCrudResolver";
export { FindOneMovieResolver } from "./Movie/FindOneMovieResolver";
export { FindManyMovieResolver } from "./Movie/FindManyMovieResolver";
export { CreateMovieResolver } from "./Movie/CreateMovieResolver";
export { DeleteMovieResolver } from "./Movie/DeleteMovieResolver";
export { UpdateMovieResolver } from "./Movie/UpdateMovieResolver";
export { DeleteManyMovieResolver } from "./Movie/DeleteManyMovieResolver";
export { UpdateManyMovieResolver } from "./Movie/UpdateManyMovieResolver";
export { UpsertMovieResolver } from "./Movie/UpsertMovieResolver";
export { AggregateMovieResolver } from "./Movie/AggregateMovieResolver";
export * from "./Movie/args";
export { PatientCrudResolver } from "./Patient/PatientCrudResolver";
export { FindOnePatientResolver } from "./Patient/FindOnePatientResolver";
export { FindManyPatientResolver } from "./Patient/FindManyPatientResolver";
export { CreatePatientResolver } from "./Patient/CreatePatientResolver";
export { DeletePatientResolver } from "./Patient/DeletePatientResolver";
export { UpdatePatientResolver } from "./Patient/UpdatePatientResolver";
export { DeleteManyPatientResolver } from "./Patient/DeleteManyPatientResolver";
export { UpdateManyPatientResolver } from "./Patient/UpdateManyPatientResolver";
export { UpsertPatientResolver } from "./Patient/UpsertPatientResolver";
export { AggregatePatientResolver } from "./Patient/AggregatePatientResolver";
export * from "./Patient/args";
export { PostCrudResolver } from "./Post/PostCrudResolver";
export { FindOnePostResolver } from "./Post/FindOnePostResolver";
export { FindManyPostResolver } from "./Post/FindManyPostResolver";
export { CreatePostResolver } from "./Post/CreatePostResolver";
export { DeletePostResolver } from "./Post/DeletePostResolver";
export { UpdatePostResolver } from "./Post/UpdatePostResolver";
export { DeleteManyPostResolver } from "./Post/DeleteManyPostResolver";
export { UpdateManyPostResolver } from "./Post/UpdateManyPostResolver";
export { UpsertPostResolver } from "./Post/UpsertPostResolver";
export { AggregatePostResolver } from "./Post/AggregatePostResolver";
export * from "./Post/args";

@Module({
  providers: [
    CategoryCrudResolver,
    ClientCrudResolver,
    DirectorCrudResolver,
    MovieCrudResolver,
    PatientCrudResolver,
    PostCrudResolver
  ],
  exports: [
    CategoryCrudResolver,
    ClientCrudResolver,
    DirectorCrudResolver,
    MovieCrudResolver,
    PatientCrudResolver,
    PostCrudResolver
  ]
})
export class CrudResolversModule {
}
