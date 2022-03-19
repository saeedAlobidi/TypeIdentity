import UserClaims from "../Core/Entities/UserClaims";
import IdentityUsers from "./IdentityUsers";
import { Entity } from "typeorm";

@Entity("IdentityUserClaims", { schema: "dbo" })
export default class IdentityUserClaims  extends UserClaims<IdentityUsers> {

}