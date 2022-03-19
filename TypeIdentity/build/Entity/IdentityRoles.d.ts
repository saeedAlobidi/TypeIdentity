import Roles from "../Core/Entities/Roles";
import IdentityRoleClaims from "./IdentityRoleClaims";
import IdentityUsers from "./IdentityUsers";
export default class IdentityRoles extends Roles<IdentityUsers, IdentityRoleClaims> {
}
