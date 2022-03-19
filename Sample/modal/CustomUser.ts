import Roles from "cls/TypeIdenitiy/Core/Entities/Roles";
import UserClaims from "cls/TypeIdenitiy/Core/Entities/UserClaims";
import UserLogins from "cls/TypeIdenitiy/Core/Entities/UserLogins";
import Users from "cls/TypeIdenitiy/Core/Entities/Users";
import UserTokens from "cls/TypeIdenitiy/Core/Entities/UserTokens";
import IdentityRoles from "cls/TypeIdenitiy/Entity/IdentityRoles";
import IdentityUserClaims from "cls/TypeIdenitiy/Entity/IdentityUserClaims";
import IdentityUserLogins from "cls/TypeIdenitiy/Entity/IdentityUserLogins";
import IdentityUserTokens from "cls/TypeIdenitiy/Entity/IdentityUserTokens";
import { Column, Entity } from "typeorm";


@Entity("CustomUser")
export default class CustomUser extends Users<IdentityUserClaims,IdentityUserLogins,IdentityUserTokens,IdentityRoles>{
    
    @Column("int", { name: "countryId", nullable: true })
    countryId: Number | null = 1
 
}