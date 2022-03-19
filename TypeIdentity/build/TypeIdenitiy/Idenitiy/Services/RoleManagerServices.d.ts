import GenericServices from "./GenericServices";
import IRoleManagerRepos from '../../Core/Repositories/IRoleManagerRepos';
import IRoleClaimsManagerRepos from "../../Core/Repositories/IRoleClaimsManagerRepos";
import IRoleManagerServices from "../../Core/Services/IRoleManagerServices";
export default class RoleManagerServices<RolesEntity, RolesEntityClaimsEntity> extends GenericServices<RolesEntity> implements IRoleManagerServices<RolesEntity, RolesEntityClaimsEntity> {
    /**   Generic abstract services that contain basic operation
     * @param IRoleClaimsManagerRepos  permission repository  interface
     */
    IRoleClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>;
    /**   RoleManagerServices constructor
   * @param IRoleManagerRepos Role Manager repository  interface
   * @param IRoleClaimsManagerRepos  permission repository  interface
   * @retunr new instance of RoleManagerServices
   */
    constructor(IRoleManagerRepos: IRoleManagerRepos<RolesEntity>, IRoleClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>);
    /**   getRolesByNameAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param name role name
   * @retunr new instance of RolesEntity
   */
    getRolesByNameAsync(name: String): Promise<any>;
    /**   addPermisstionAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity  RolesEntityClaimsEntity  databse
    * @retunr new instance of RolesEntityClaimsEntity
    */
    addPermisstionAsync(entity: RolesEntityClaimsEntity): Promise<any>;
    /**   getAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr new instance of RolesEntity
     */
    getAsync(entity: RolesEntity): Promise<any>;
    /**   addAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr new instance of RolesEntity
     */
    addAsync(entity: any): Promise<any>;
    /**   updateAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr  update  of RolesEntity
     */
    updateAsync(entity: RolesEntity): Promise<any>;
    /**  deleteAsync
      *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
      * @param entity  RolesEntity  databse
      * @retunr  delete status
      */
    deleteAsync(entity: RolesEntity): Promise<any>;
}
