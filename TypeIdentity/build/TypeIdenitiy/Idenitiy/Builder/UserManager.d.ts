import "reflect-metadata";
import IUserManagerServices from "../../Core/Services/IUserManagerServices";
import GenericRepository from "../Repositories/GenericRepository";
export default class UserManager<UsersEntity, UsersClaimsEntity> {
    /**
    
    * @param context  database context
    * @param IUserManagerServices User Manager service interface
    * @param IUserManagerRepos   User Manager repository  interface
    * @param IUserClaimsManagerRepos   user extra info  repository  interface
    
    */
    private context;
    private IUserManagerServices;
    private IUserManagerRepos;
    private IUserClaimsManagerRepos;
    /**
      * setUserManagerServices allow to customize user manager
      * @param IUserManagerRepos   User Manager repository  interface
      *@return instance UserManager
      */
    setRoleManagerServices: (IUserManagerRepos: GenericRepository<UsersEntity>) => this;
    /**
      * setUserManagerServices allow to customize extra information user manager
      * @param IUserClaimsManagerRepos   User extra info Manager repository  interface
      *@return instance UserManager
      */
    setRoleClaimsManagerRepos: (IUserClaimsManagerRepos: GenericRepository<UsersClaimsEntity>) => this;
    /**
    *  build instance
    *@return instance UserManager
    */
    build(): IUserManagerServices<UsersEntity, UsersClaimsEntity>;
}
