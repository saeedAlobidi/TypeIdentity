import validate from "annotation-exception-handlers/validate";
import { CookiesConfiguration } from "../../Core/Common/CookiesModel";
import IAuthorizeServices from "../../Core/Services/IAuthorizeServices";
import Encryption from "../../Core/Utilities/Encryption";


/**
*AuthorizeType type enum
@return   instance AuthorizeSType
*/


export enum AuthorizeType {
    Roles,
    Policy
}



export class AuthorizeServices implements IAuthorizeServices {

    /**
     * @param request  express.js request for more inf https://expressjs.com/
     * @param response     express.js response for more inf https://expressjs.com/
     * @param authorizeSType authorizeSType
     * @param policyName     permission name such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
     * @param Encryption    Encryption class that encrpt all data in cookies
     * @param CookiesConfiguration    Cookies basic inforamtion such as name you can override to build your custom class
     */

    private request: any
    private response: any
    private authorizeSType: AuthorizeType
    private policyName: String
    private Encryption: Encryption
    private CookiesConfiguration: CookiesConfiguration

    /** AuthorizeServices constructor
   * @param request  express.js request for more inf https://expressjs.com/
   * @param response     express.js response for more inf https://expressjs.com/
   * @param authorizeSType authorizeSType
   * @param policyName    policyName such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
   * @param Encryption    Encryption class that encrpt all data in cookies
   * @param CookiesConfiguration    Cookies basic inforamtion such as name you can override to build your custom class
   * @return new instance AuthorizeServices
   */

    constructor(request: any, response: any, authorizeSType: AuthorizeType, policyName: String, encryption: Encryption, cookiesConfiguration: CookiesConfiguration) {


        this.request = request
        this.response = response
        this.authorizeSType = authorizeSType
        this.policyName = policyName
        this.Encryption = encryption
        this.CookiesConfiguration = cookiesConfiguration
    }


    /** iSAuthorize 
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
          *  check if user have permisstion to access this method
         * @return new Boolean value 
         */

    @validate("iSAuthorize")
    iSAuthorize(): Boolean {
        const encrptUserInfo = this.getUserInfo()
        if(encrptUserInfo==null)
        return false;
        const userInfo = this.Encryption.decrypt(encrptUserInfo)
        return this.authorizeSType == AuthorizeType.Roles ? this.checkRoles(userInfo) : this.checkPolicy(userInfo)
    }


    /** getUserInfo 
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
          * getUser from http context cookies or header 
         * @return new cookies modal value 
         */

    @validate("getUserInfo")
    getUserInfo() { 
        if(this.request.cookies[this.CookiesConfiguration.getName()]!=undefined)
        return this.request.cookies[this.CookiesConfiguration.getName()]
        if(this.request.headers[this.CookiesConfiguration.getName()]!=undefined)
        return this.request.headers[this.CookiesConfiguration.getName()]
        return null

    }


    /** checkRoles 
      *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
      * check Roles from http context sunch as  admin and superadmin
      * @param userInfo user information afte login that contain role and permission
     * @return new Boolean value 
     */

    @validate("checkRoles")
    checkRoles(userInfo) { 
        return userInfo.user.RoleName.trim() == this.policyName.trim() ? true : false
    }

    /** checkPolicy 
              *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers 
              * check Roles from http context sunch as  admin and superadmin
              * @param userInfo user information afte login that contain role and permission
             * @return new Boolean value 
             */
    @validate("checkPolicy")
    checkPolicy(userInfo) {
        return userInfo.rolePermisstion.filter((policy) => policy.claimValue.trim() == this.policyName.trim());
    }




}

