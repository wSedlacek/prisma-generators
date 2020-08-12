import { registerEnumType } from "@nestjs/graphql";

/** Role enum doc */
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}
registerEnumType(Role, {
  name: "Role",
  description: "Role enum doc",
});
