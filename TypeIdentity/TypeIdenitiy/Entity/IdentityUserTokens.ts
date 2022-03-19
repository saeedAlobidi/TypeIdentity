import UserTokens from "../Core/Entities/UserTokens";
import IdentityUsers from "./IdentityUsers";
import { Entity } from "typeorm";

@Entity("IdentityUserTokens", { schema: "dbo" })
export default class IdentityUserTokens extends UserTokens<IdentityUsers>{

}