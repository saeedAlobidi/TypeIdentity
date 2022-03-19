import { CookiesConfiguration, IdentityCookies } from "../../Core/Common/CookiesModel";
import IRoleClaimsManagerRepos from "../../Core/Repositories/IRoleClaimsManagerRepos";
import ISignInManagerServices from "../../Core/Services/ISignInManagerServices";
import GenericServices from "./GenericServices";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";
export default class SignInManagerServices<UsersEntity, RolesEntityClaimsEntity> extends GenericServices<UsersEntity> implements ISignInManagerServices<UsersEntity, RolesEntityClaimsEntity> {
    /**
    
    * @param Encryption  Encryption class that encrpt all data in cookies
    * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
    * @param CookiesModel    user info that save encrpt inside cookies
    * @param IUserClaimsManagerRepos extra info user repository interface
    * @param IUserManagerRepos   User Manager repository  interface
    * @param IRoleClaimsManagerRepos   permission Manager repository  interface
    * @param request   express.js request
    * @param response     express.js response
    */
    private Encryption;
    private CookiesConfiguration;
    private CookiesModel;
    private IUserClaimsManagerRepos;
    private request;
    private response;
    /** SignInManagerServices constructor
   
  * @param Encryption  Encryption class that encrpt all data in cookies
  * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
  * @param CookiesModel    user info that save encrpt inside cookies
  * @param IUserClaimsManagerRepos extra info user repository interface
  * @param IUserManagerRepos   User Manager repository  interface
  * @param IRoleClaimsManagerRepos   permission Manager repository  interface
   * @param request   express.js request
  * @param response     express.js response
  * @returns  new instance SignInManagerServices
  */
    constructor(request: any, response: any, CookiesConfiguration: CookiesConfiguration, IUserManagerRepos: IUserManagerRepos<UsersEntity>, IUserClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>, CookiesModel: IdentityCookies<UsersEntity>);
    /** SignInAsync
     * this function will collection all user information and encrpt  add to cookies
     * @param user user information
     * @returns  void
    */
    SignInAsync(user: any, isPersistent: Boolean): Promise<void>;
    /** SignOutAsync
     * this function will clear all collection
     * @param user user information
     * @returns  void
    */
    SignOutAsync(): Promise<void>;
}
