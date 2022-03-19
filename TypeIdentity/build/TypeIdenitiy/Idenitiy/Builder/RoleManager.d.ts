import "reflect-metadata";
import IRoleManagerServices from "../../Core/Services/IRoleManagerServices";
import IdentityRoleClaims from "../../Entity/IdentityRoleClaims";
import IdentityRoles from "../../Entity/IdentityRoles";
import GenericRepository from "../Repositories/GenericRepository";
export default class RoleManager<RolesEntity = IdentityRoles, RolesClaimsEntity = IdentityRoleClaims> {
    /**
     * @param context  database context
     * @param IRoleManagerServices   Role Manager service interface
     * @param roleManagerRepos   Role Manager repository  interface
     * @param roleClaimsManagerRepos   permission  Manager repository  interface
     */
    private context;
    private IRoleManagerServices;
    private roleManagerRepos;
    private roleClaimsManagerRepos;
    /**
     *  setRoleManagerServices: allow to customize role manager repository
     * @param RoleManagerRepos  Role Manager repository  interface
     * @return instance RoleManager
     */
    setRoleManagerServices: (RoleManagerRepos: GenericRepository<RolesEntity>) => this;
    /**
     *  setRoleClaimsManagerRepos: allow to customize permission  manager repository
     * @param roleClaimsManagerRepos   permission  Manager repository  interface
     * @return instance RoleManager
     */
    setRoleClaimsManagerRepos: (roleClaimsManagerRepos: GenericRepository<RolesClaimsEntity>) => this;
    /**
     * build Role Manager
     * @return instance RoleManager
     */
    build(): IRoleManagerServices<RolesEntity, RolesClaimsEntity>;
}
