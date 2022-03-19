import validate from "annotation-exception-handlers/validate";
import GenericServices from "./GenericServices";
import IRoleManagerRepos from '../../Core/Repositories/IRoleManagerRepos'
import IRoleClaimsManagerRepos from "../../Core/Repositories/IRoleClaimsManagerRepos";
import IRoleManagerServices from "../../Core/Services/IRoleManagerServices";


export default class RoleManagerServices<RolesEntity, RolesEntityClaimsEntity> extends GenericServices<RolesEntity>
  implements IRoleManagerServices<RolesEntity, RolesEntityClaimsEntity> {


  /**   Generic abstract services that contain basic operation
   * @param IRoleClaimsManagerRepos  permission repository  interface 
   */

  IRoleClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>



  /**   RoleManagerServices constructor
 * @param IRoleManagerRepos Role Manager repository  interface
 * @param IRoleClaimsManagerRepos  permission repository  interface 
 * @retunr new instance of RoleManagerServices
 */


  constructor(
    IRoleManagerRepos: IRoleManagerRepos<RolesEntity>,
    IRoleClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>) {
    super(IRoleManagerRepos)
    this.IRoleClaimsManagerRepos = IRoleClaimsManagerRepos
  }





  /**   getRolesByNameAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param name role name
 * @retunr new instance of RolesEntity
 */

  @validate("addRolesClaimsAsync")
  async getRolesByNameAsync(name: String) {
    const buildQueryBuild = await this.IGenericRepository.GetQueryBuilder("roles");
    var data = await buildQueryBuild.where("roles.name =:name")
      .setParameters({ name: name }).getOne()
    return (data)
  }


  /**   addPermisstionAsync
  *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
  * @param entity  RolesEntityClaimsEntity  databse  
  * @retunr new instance of RolesEntityClaimsEntity
  */

  @validate("addRolesClaimsAsync")
  async addPermisstionAsync(entity: RolesEntityClaimsEntity) {
    let value = await this.IRoleClaimsManagerRepos.AddPromise(entity)
    return value
  }



  /**   getAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
   * @param entity  RolesEntity  databse  
   * @retunr new instance of RolesEntity
   */


  @validate("getAsync")
  async getAsync(entity: RolesEntity) {

    let value = await this.IGenericRepository.GetAllPromise()
    return value

  }


  /**   addAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
   * @param entity  RolesEntity  databse  
   * @retunr new instance of RolesEntity
   */

  @validate("addAsync")
  async addAsync(entity) {
    entity.normalizedName = entity.name
    return this.IGenericRepository.AddPromise(entity)
  }



  /**   updateAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
   * @param entity  RolesEntity  databse  
   * @retunr  update  of RolesEntity
   */

  @validate("updateAsync")
  async updateAsync(entity: RolesEntity) {

    return await this.IGenericRepository.UpdatePromise(entity)
  }


  /**  deleteAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
    * @param entity  RolesEntity  databse  
    * @retunr  delete status
    */

  @validate("deleteAsync")
  async deleteAsync(entity: RolesEntity) {
    let value = await this.IGenericRepository.DeletePromise(entity)
    return value
  }




}

