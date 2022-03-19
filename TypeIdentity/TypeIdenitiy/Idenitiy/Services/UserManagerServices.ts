import validate from "annotation-exception-handlers/validate";
import IUserClaimsManagerRepos from "../../Core/Repositories/IUserClaimsManagerRepos";
import IUserManagerServices from "../../Core/Services/IUserManagerServices";
import GenericServices from "./GenericServices";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";




export default class UserManagerServices<UsersEntity, UsersClaimsEntity = {}> extends GenericServices<UsersEntity> implements IUserManagerServices<UsersEntity, UsersClaimsEntity> {


  /**
    * @param IUserClaimsManagerRepos   user extra info  repository  interface
    */

  IUserClaimsManagerRepos: IUserClaimsManagerRepos<UsersClaimsEntity>


  /** UserManagerServices constructor
  * @param IUserClaimsManagerRepos   user extra info  repository  interface
  * @return new instance of UserManagerServices
  */

  constructor(IUserManagerRepos: IUserManagerRepos<UsersEntity>,
    IUserClaimsManagerRepos: IUserClaimsManagerRepos<UsersClaimsEntity>) {

    super(IUserManagerRepos)
    this.IUserClaimsManagerRepos = IUserClaimsManagerRepos
  }




  /** UserManagerServices 
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param entity   UsersClaims Entity 
 * @return new instance of UsersClaimsEntity
 */
  @validate("CreateUserClaimsAsync")
  CreateUserClaimsAsync(entity: UsersClaimsEntity): Promise<UsersClaimsEntity> {
    return this.IUserClaimsManagerRepos.AddPromise(entity)

  }



  /** FindByUserNameAsync 
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param userName user name
 * @return   update  of UsersClaimsEntity
 */
  @validate("FindByUserNameAsync")
  async FindByUserNameAsync(userName: String): Promise<UsersEntity> {
    const buildQueryBuild = await this.IGenericRepository.GetQueryBuilder("users");
    var data = await buildQueryBuild.where("users.userName =:userName")
      .setParameters({ userName: userName }).getOne()
    return (data)
  }




 /** FindByIdAsync 
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param id user name
 * @return    UsersClaimsEntity
 */
  @validate("FindByIdAsync")
  async FindByIdAsync(id: String): Promise<UsersEntity> {
    const buildQueryBuild = await this.IGenericRepository.GetQueryBuilder("users");
    return await buildQueryBuild.where("users.id =:id").setParameters({ id: id }).getOne()
  }



 /** getAsync  
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param entity Users Entity
 * @return    UsersClaimsEntity
 */
  @validate("getAsync")
  async getAsync(entity: UsersEntity) { 
    return this.IGenericRepository.GetAllPromise()
  }

   /** addAsync  
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param entity Users Entity
 * @return  new instance  UsersClaimsEntity
 */

  @validate("addAsync")
  async addAsync(entity: UsersEntity) {
    return this.IGenericRepository.AddPromise(entity)


  }

  /** addAsync  
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param entity Users Entity
 * @return  update of UsersClaimsEntity
 */
  @validate("updateAsync")
  async updateAsync(entity: UsersEntity) {
    return this.IGenericRepository.UpdatePromise(entity)
  }


 /** deleteAsync  
 *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
 * @param entity Users Entity
 * @return  return delete status
 */
  @validate("deleteAsync")
  async deleteAsync(entity: UsersEntity): Promise<UsersEntity> {
    return this.IGenericRepository.DeletePromise(entity)


  }




}

