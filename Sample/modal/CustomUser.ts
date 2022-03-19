import Roles from "type-identity/Core/Entities/Roles";
import UserClaims from "type-identity/Core/Entities/UserClaims";
import UserLogins from "type-identity/Core/Entities/UserLogins";
import Users from "type-identity/Core/Entities/Users";
import UserTokens from "type-identity/Core/Entities/UserTokens";
import IdentityRoles from "type-identity/Entity/IdentityRoles";
import IdentityUserClaims from "type-identity/Entity/IdentityUserClaims";
import IdentityUserLogins from "type-identity/Entity/IdentityUserLogins";
import IdentityUserTokens from "type-identity/Entity/IdentityUserTokens";
import { Column, Entity } from "typeorm";


@Entity("CustomUser")
export default class CustomUser extends Users<IdentityUserClaims,IdentityUserLogins,IdentityUserTokens,IdentityRoles>{
    
    @Column("int", { name: "countryId", nullable: true })
    countryId: Number | null = 1
 
}