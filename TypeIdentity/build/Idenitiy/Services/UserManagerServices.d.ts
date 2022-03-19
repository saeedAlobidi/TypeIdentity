import IUserClaimsManagerRepos from "../../Core/Repositories/IUserClaimsManagerRepos";
import IUserManagerServices from "../../Core/Services/IUserManagerServices";
import GenericServices from "./GenericServices";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";
export default class UserManagerServices<UsersEntity, UsersClaimsEntity = {}> extends GenericServices<UsersEntity> implements IUserManagerServices<UsersEntity, UsersClaimsEntity> {
    /**
      * @param IUserClaimsManagerRepos   user extra info  repository  interface
      */
    IUserClaimsManagerRepos: IUserClaimsManagerRepos<UsersClaimsEntity>;
    /** UserManagerServices constructor
    * @param IUserClaimsManagerRepos   user extra info  repository  interface
    * @return new instance of UserManagerServices
    */
    constructor(IUserManagerRepos: IUserManagerRepos<UsersEntity>, IUserClaimsManagerRepos: IUserClaimsManagerRepos<UsersClaimsEntity>);
    /** UserManagerServices
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param entity   UsersClaims Entity
   * @return new instance of UsersClaimsEntity
   */
    CreateUserClaimsAsync(entity: UsersClaimsEntity): Promise<UsersClaimsEntity>;
    /** FindByUserNameAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param userName user name
   * @return   update  of UsersClaimsEntity
   */
    FindByUserNameAsync(userName: String): Promise<UsersEntity>;
    /** FindByIdAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param id user name
    * @return    UsersClaimsEntity
    */
    FindByIdAsync(id: String): Promise<UsersEntity>;
    /** getAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity Users Entity
    * @return    UsersClaimsEntity
    */
    getAsync(entity: UsersEntity): Promise<any>;
    /** addAsync
  *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
  * @param entity Users Entity
  * @return  new instance  UsersClaimsEntity
  */
    addAsync(entity: UsersEntity): Promise<any>;
    /** addAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param entity Users Entity
   * @return  update of UsersClaimsEntity
   */
    updateAsync(entity: UsersEntity): Promise<any>;
    /** deleteAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity Users Entity
    * @return  return delete status
    */
    deleteAsync(entity: UsersEntity): Promise<UsersEntity>;
}
