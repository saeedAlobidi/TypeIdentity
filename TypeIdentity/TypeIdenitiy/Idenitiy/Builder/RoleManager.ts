import "reflect-metadata";
import { container } from "tsyringe";
import IContext from "../../Core/DbConstraints/IContext";
import IRoleManagerServices from "../../Core/Services/IRoleManagerServices";
import IdentityRoleClaims from "../../Entity/IdentityRoleClaims";
import IdentityRoles from "../../Entity/IdentityRoles";
import GenericRepository from "../Repositories/GenericRepository";
import RoleClaimsManagerRepos from "../Repositories/RoleClaimsManagerRepos";
import RoleManagerRepos from "../Repositories/RoleManagerRepos";
import RoleManagerServices from "../Services/RoleManagerServices";

 


export default class RoleManager<RolesEntity=IdentityRoles, RolesClaimsEntity=IdentityRoleClaims> {

    /**
     * @param context  database context
     * @param IRoleManagerServices   Role Manager service interface
     * @param roleManagerRepos   Role Manager repository  interface
     * @param roleClaimsManagerRepos   permission  Manager repository  interface
     */

    private context: IContext = container.resolve("DbContext") 
    private IRoleManagerServices: IRoleManagerServices<RolesEntity, RolesClaimsEntity>
    private roleManagerRepos = new RoleManagerRepos<RolesEntity>(this.context, this.context.config.getEntity("roles"))
    private roleClaimsManagerRepos = new RoleClaimsManagerRepos<RolesClaimsEntity>(this.context,this.context.config.getEntity("roleClaims"))



      
    /**
     *  setRoleManagerServices: allow to customize role manager repository
     * @param RoleManagerRepos  Role Manager repository  interface
     * @return instance RoleManager
     */
    setRoleManagerServices = (RoleManagerRepos: GenericRepository<RolesEntity>) => {
        this.roleManagerRepos = RoleManagerRepos
        return this

    }

       
    /**
     *  setRoleClaimsManagerRepos: allow to customize permission  manager repository
     * @param roleClaimsManagerRepos   permission  Manager repository  interface
     * @return instance RoleManager
     */

    setRoleClaimsManagerRepos = (roleClaimsManagerRepos: GenericRepository<RolesClaimsEntity>) => {
        this.roleClaimsManagerRepos = roleClaimsManagerRepos
        return this

    }


         
    /**
     * build Role Manager  
     * @return instance RoleManager
     */

    build() {
        this.IRoleManagerServices = new RoleManagerServices<RolesEntity, RolesClaimsEntity>(this.roleManagerRepos, this.roleClaimsManagerRepos)
        return this.IRoleManagerServices
    }
    
}