import Users from "../Core/Entities/Users";
import IdentityRoles from "./IdentityRoles";
import IdentityUserClaims from "./IdentityUserClaims";
import IdentityUserLogins from "./IdentityUserLogins";
import IdentityUserTokens from "./IdentityUserTokens";
export default class IdentityUsers extends Users<IdentityUserClaims, IdentityUserLogins, IdentityUserTokens, IdentityRoles> {
}
