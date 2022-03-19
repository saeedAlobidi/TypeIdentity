import "reflect-metadata";
import ISignInManagerServices from "../../Core/Services/ISignInManagerServices";
import GenericRepository from "../Repositories/GenericRepository";
export default class SignManager<UsersEntity, RolesEntityClaimsEntity> {
    /**
    
    * @param context  database context
    * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
    * @param CookiesModel    user info that save encrpt inside cookies
    * @param ISignInManagerServices Sign Manager service interface
    * @param IUserManagerRepos   User Manager repository  interface
    * @param IRoleClaimsManagerRepos   permission Manager repository  interface
    
    */
    private context;
    private CookiesConfiguration;
    private CookiesModel;
    private ISignInManagerServices;
    private IUserManagerRepos;
    private IRoleClaimsManagerRepos;
    /**
    * setUserManagerServices allow to customize user manager
    * @param IUserManagerRepos   User Manager repository  interface
    *@return instance SignManager
    */
    setUserManagerServices: (IUserManagerRepos: GenericRepository<UsersEntity>) => this;
    /**
     * setRoleClaimsManagerRepos allow to customize user manager
     * @param IRoleClaimsManagerRepos   permission repository  interface
     *@return instance SignManager
     */
    setRoleClaimsManagerRepos: (IRoleClaimsManagerRepos: GenericRepository<RolesEntityClaimsEntity>) => this;
    /**
    *  build instance
    * @param req   express.js request
    * @param res   express.js response
    *@return instance SignManager
    */
    build(req: any, res: any): ISignInManagerServices<UsersEntity, RolesEntityClaimsEntity>;
}
