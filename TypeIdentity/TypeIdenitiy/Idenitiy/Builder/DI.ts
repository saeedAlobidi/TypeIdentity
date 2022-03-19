import { container, Lifecycle } from "tsyringe";
import { CookiesModel, IdentityCookiesConfiguration } from "../../Core/Common/CookiesModel";
import DbConstraint from "../../Core/DbConstraints/DbConstraint";
import DbContext from "../DbContexts/DbContext";

export default class DI {

    private _DbConstraint = DbConstraint
    private _DbContext = DbContext
    private CookieModal = CookiesModel
    private CookiesConfiguration = IdentityCookiesConfiguration

    
     /**
     *  Databse Constraint 
     * @param DbConstraint database constraint {name,password ..etc}
     * @return void
     */

    setDbConstraint(DbConstraint) {
        this._DbConstraint = DbConstraint
        return this
    }

 
     /**
     * seDbContext
     * @param DbContext  new instance of Database Context TypeOrm Library
     * @return void
     */
 
    seDbContext(DbContext) {
        this._DbContext = DbContext
        return this
    }

    /**
     * seCookiesConfig 
     * @param CookieModal the cookies modal user info
     * @return void
     */


    seCookiesConfig(CookieModal, CookiesConfiguration) {

        this.CookieModal = CookieModal;
        this.CookiesConfiguration = CookiesConfiguration
        return this
    }

   

     /**
     *  build dependency injection 
     * @return void
     */
    build() {


        container.register("DbConstraint", {
            useClass: this._DbConstraint
        }, { lifecycle: Lifecycle.Singleton });

        container.register("DbContext", {
            useClass: this._DbContext
        }, { lifecycle: Lifecycle.Singleton });
        container.register("CookiesModel", {
            useClass: this.CookieModal
        }, { lifecycle: Lifecycle.Singleton });

        container.register("CookiesConfiguration", {
            useClass: this.CookiesConfiguration
        }, { lifecycle: Lifecycle.Singleton });

    }
}