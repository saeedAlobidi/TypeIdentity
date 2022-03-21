import { CookiesConfiguration, IdentityCookies } from "../../Core/Common/CookiesModel";
import IRoleClaimsManagerRepos from "../../Core/Repositories/IRoleClaimsManagerRepos";
import ISignInManagerServices from "../../Core/Services/ISignInManagerServices";
import Encryption from "../../Core/Utilities/Encryption";
import GenericServices from "./GenericServices";
import IUserManagerRepos from "../../Core/Repositories/IUserManagerRepos";



export default class SignInManagerServices<UsersEntity, RolesEntityClaimsEntity>
  extends GenericServices<UsersEntity> implements ISignInManagerServices<UsersEntity, RolesEntityClaimsEntity> {


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
  private Encryption: Encryption
  private CookiesConfiguration: CookiesConfiguration
  private CookiesModel: IdentityCookies<UsersEntity>
  private IUserClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>
  private request: any
  private response: any


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


  constructor(
    request: any,
    response: any,
    CookiesConfiguration: CookiesConfiguration,
    IUserManagerRepos: IUserManagerRepos<UsersEntity>,
    IUserClaimsManagerRepos: IRoleClaimsManagerRepos<RolesEntityClaimsEntity>,
    CookiesModel: IdentityCookies<UsersEntity>) {
    super(IUserManagerRepos)
    this.Encryption = new Encryption(CookiesConfiguration)
    this.IUserClaimsManagerRepos = IUserClaimsManagerRepos
    this.CookiesModel = CookiesModel;
    this.request = request
    this.response = response
    this.CookiesConfiguration = CookiesConfiguration
  }



  /** SignInAsync 
   * this function will collection all user information and encrpt  add to cookies
   * @param user user information
   * @returns  void
  */


  async SignInAsync(user: any, isPersistent: Boolean) {
    const buildQueryBuild = await this.IUserClaimsManagerRepos.GetQueryBuilder("EntityClaims");

    const permisstions = await buildQueryBuild.where("EntityClaims.roleId =:roleId")
      .setParameters({ roleId: user.RoleId }).getMany()

    const cookiesData = this.CookiesModel.builder().setUser(user)
      .setPermisstion(permisstions)

      const userData=  this.Encryption.crypto(this.CookiesModel);
    this.response.cookie(
      this.CookiesConfiguration.getName(),userData,
      {
        //Todo: expires: new Date(this.CookiesConfiguration.getExpires()),
        httpOnly: this.CookiesConfiguration.getHttpOnly(),
        secure: this.CookiesConfiguration.getSecure()
      })


    this.response.header( this.CookiesConfiguration.getName(),userData).status(200).redirect(this.CookiesConfiguration.getSuccessfullyPage());




  }



  /** SignOutAsync 
   * this function will clear all collection
   * @param user user information
   * @returns  void
  */


  async SignOutAsync() {
    this.response.clearCookie(this.CookiesConfiguration.getName());
    this.response.status(200).redirect(this.CookiesConfiguration.getLoginPage());
  }
}

