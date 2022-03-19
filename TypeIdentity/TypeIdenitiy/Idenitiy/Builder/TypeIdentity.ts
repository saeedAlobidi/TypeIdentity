import "reflect-metadata";
import { container } from "tsyringe";
import { CookiesModel, IdentityCookiesConfiguration } from "../../Core/Common/CookiesModel";
import DbConstraint from "../../Core/DbConstraints/DbConstraint";
import Migration from "../Configuration/Migration";
import DI from "./DI";


export default class TypeIdentity {
  /**
     
     * @param dbConstraint  database Constraint 
     * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
     * @param CookiesModel    user info that save encrpt inside cookies
     */


  private CookiesModel = CookiesModel
  private CookiesConfiguration=IdentityCookiesConfiguration
  private dbConstraint: DbConstraint



   /** setDatabaseConfig
     
     * @param dbConfig  database Constraint
     * @return new instance of type identity
     */


  setDatabaseConfig = (dbConfig) => {
    this.dbConstraint = dbConfig
    return this
  }


   /** seCookiesConfig
     
     * @param CookieOption  
     * @return new instance of type identity
     */
  seCookiesConfig(CookieOption=(option)=>{}) {
    CookieOption({ "Cookie": this.CookiesModel, "config": this.CookiesConfiguration })
    return this
  }

  async migrationConfig() {
    await   Migration(container.resolve("DbConstraint"))
    return this
  }



  build = () => new DI()
    .setDbConstraint(this.dbConstraint)
    .seCookiesConfig(this.CookiesModel, this.CookiesConfiguration)
    .build()



}


