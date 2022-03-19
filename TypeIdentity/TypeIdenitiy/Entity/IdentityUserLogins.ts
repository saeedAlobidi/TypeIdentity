import UserLogins from "../Core/Entities/UserLogins";
import IdentityUsers from "./IdentityUsers";
import { Entity } from "typeorm";

@Entity("IdentityUserLogins", { schema: "dbo" })
export default class IdentityUserLogins  extends  UserLogins<IdentityUsers>{

}