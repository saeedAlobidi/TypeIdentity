import "reflect-metadata";
import { container } from "tsyringe";
import IContext from "../../Core/DbConstraints/IContext";
import IUserClaimsManagerRepos from "../../Core/Repositories/IUserClaimsManagerRepos";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";
import IUserManagerServices from "../../Core/Services/IUserManagerServices";
import GenericRepository from "../Repositories/GenericRepository";
import UserClaimsManagerRepos from "../Repositories/UserClaimsManagerServices";
import UserManagerRepos from "../Repositories/UserManagerRepos";
import UserManagerServices from "../Services/UserManagerServices";
 


export default class UserManager<UsersEntity, UsersClaimsEntity> {

    
     /**
     
     * @param context  database context
     * @param IUserManagerServices User Manager service interface   
     * @param IUserManagerRepos   User Manager repository  interface
     * @param IUserClaimsManagerRepos   user extra info  repository  interface
     
     */
    

    private context: IContext = container.resolve("DbContext")
    private IUserManagerServices: IUserManagerServices<UsersEntity, UsersClaimsEntity>
    private IUserManagerRepos: IUserManagerRepos<UsersEntity>=new UserManagerRepos<UsersEntity>(this.context, this.context.config.getEntity("users"))
    private IUserClaimsManagerRepos: IUserClaimsManagerRepos<UsersClaimsEntity>=new UserClaimsManagerRepos<UsersClaimsEntity>(this.context, this.context.config.getEntity("userClaims"))
    


   /**
     * setUserManagerServices allow to customize user manager 
     * @param IUserManagerRepos   User Manager repository  interface 
     *@return instance UserManager
     */
    setRoleManagerServices = (IUserManagerRepos: GenericRepository<UsersEntity>) => {
        this.IUserManagerRepos = IUserManagerRepos
        return this

    }

  
   /**
     * setUserManagerServices allow to customize extra information user manager 
     * @param IUserClaimsManagerRepos   User extra info Manager repository  interface 
     *@return instance UserManager
     */
    setRoleClaimsManagerRepos = (IUserClaimsManagerRepos: GenericRepository<UsersClaimsEntity>) => {
        this.IUserClaimsManagerRepos = IUserClaimsManagerRepos
        return this
    }

     /**
     *  build instance 
     *@return instance UserManager
     */
    build() {
        this.IUserManagerServices = new UserManagerServices<UsersEntity, UsersClaimsEntity>(this.IUserManagerRepos, this.IUserClaimsManagerRepos)
        return this.IUserManagerServices
    }

}