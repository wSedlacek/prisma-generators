import { registerEnumType } from "@nestjs/graphql";

export enum MovieDistinctFieldEnum {
  directorFirstName = "directorFirstName",
  directorLastName = "directorLastName",
  title = "title"
}
registerEnumType(MovieDistinctFieldEnum, {
  name: "MovieDistinctFieldEnum",
  description: undefined,
});
