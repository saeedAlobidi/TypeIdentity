import { Entity } from "typeorm";
import RoleClaims from "../Core/Entities/RoleClaims";
import IdentityRoles from "./IdentityRoles";


@Entity("IdentityRoleClaims", { schema: "dbo" })

 export default class IdentityRoleClaims extends  RoleClaims<IdentityRoles>{
     

 }