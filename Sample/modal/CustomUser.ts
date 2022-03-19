import Roles from "type-identity/TypeIdenitiy/Core/Entities/Roles";
import UserClaims from "type-identity/TypeIdenitiy/Core/Entities/UserClaims";
import UserLogins from "type-identity/TypeIdenitiy/Core/Entities/UserLogins";
import Users from "type-identity/TypeIdenitiy/Core/Entities/Users";
import UserTokens from "type-identity/TypeIdenitiy/Core/Entities/UserTokens";
import IdentityRoles from "type-identity/TypeIdenitiy/Entity/IdentityRoles";
import IdentityUserClaims from "type-identity/TypeIdenitiy/Entity/IdentityUserClaims";
import IdentityUserLogins from "type-identity/TypeIdenitiy/Entity/IdentityUserLogins";
import IdentityUserTokens from "type-identity/TypeIdenitiy/Entity/IdentityUserTokens";
import { Column, Entity } from "typeorm";


@Entity("CustomUser")
export default class CustomUser extends Users<IdentityUserClaims,IdentityUserLogins,IdentityUserTokens,IdentityRoles>{
    
    @Column("int", { name: "countryId", nullable: true })
    countryId: Number | null = 1
 
}