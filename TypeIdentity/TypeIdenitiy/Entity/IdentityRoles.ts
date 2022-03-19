import { Entity } from "typeorm";
import Roles from "../Core/Entities/Roles";
import IdentityRoleClaims from "./IdentityRoleClaims";
import IdentityUsers from "./IdentityUsers";

@Entity("IdentityRoles", { schema: "dbo" })

export default class IdentityRoles  extends Roles<IdentityUsers,IdentityRoleClaims> {

}