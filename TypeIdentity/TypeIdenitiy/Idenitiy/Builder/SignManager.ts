import "reflect-metadata";
import { container } from "tsyringe";
import { CookiesConfiguration, IdentityCookies } from "../../Core/Common/CookiesModel";
import IContext from "../../Core/DbConstraints/IContext";
import IRoleClaimsManagerRepos from "../../Core/Repositories/IRoleClaimsManagerRepos";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";
import ISignInManagerServices from "../../Core/Services/ISignInManagerServices";
import GenericRepository from "../Repositories/GenericRepository";
import RoleClaimsManagerRepos from "../Repositories/RoleClaimsManagerRepos";
import UserManagerRepos from "../Repositories/UserManagerRepos";
import SignInManagerServices from "../Services/SignInManagerServices";



export default class SignManager<UsersEntity, RolesEntityClaimsEntity> {

     /**
     
     * @param context  database context
     * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
     * @param CookiesModel    user info that save encrpt inside cookies
     * @param ISignInManagerServices Sign Manager service interface   
     * @param IUserManagerRepos   User Manager repository  interface
     * @param IRoleClaimsManagerRepos   permission Manager repository  interface
     
     */

    private context: IContext = container.resolve("DbContext")
    private CookiesConfiguration: CookiesConfiguration = container.resolve("CookiesConfiguration")
    private CookiesModel: IdentityCookies<UsersEntity> = container.resolve("CookiesModel")
    private ISignInManagerServices: ISignInManagerServices<UsersEntity, RolesEntityClaimsEntity>
    private IUserManagerRepos: IUserManagerRepos<UsersEntity> = new UserManagerRepos<UsersEntity>(this.context, this.context.config.getEntity("users"))
    private IRoleClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity> = new RoleClaimsManagerRepos<RolesEntityClaimsEntity>(this.context, this.context.config.getEntity("roleClaims"))


     /**
     * setUserManagerServices allow to customize user manager 
     * @param IUserManagerRepos   User Manager repository  interface 
     *@return instance SignManager
     */
    setUserManagerServices = (IUserManagerRepos: GenericRepository<UsersEntity>) => {
        this.IUserManagerRepos = IUserManagerRepos
        return this

    }

    /**
     * setRoleClaimsManagerRepos allow to customize user manager 
     * @param IRoleClaimsManagerRepos   permission repository  interface 
     *@return instance SignManager
     */
    setRoleClaimsManagerRepos = (IRoleClaimsManagerRepos: GenericRepository<RolesEntityClaimsEntity>) => {
        this.IRoleClaimsManagerRepos = IRoleClaimsManagerRepos
        return this

    }

     /**
     *  build instance 
     * @param req   express.js request
     * @param res   express.js response
     *@return instance SignManager
     */

    build(req: any, res: any) {
        this.ISignInManagerServices =
            new SignInManagerServices<UsersEntity, RolesEntityClaimsEntity>
                (req, res, this.CookiesConfiguration, this.IUserManagerRepos, this.IRoleClaimsManagerRepos, this.CookiesModel)
        return this.ISignInManagerServices
    }

}