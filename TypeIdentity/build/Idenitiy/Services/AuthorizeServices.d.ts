import { CookiesConfiguration } from "../../Core/Common/CookiesModel";
import IAuthorizeServices from "../../Core/Services/IAuthorizeServices";
import Encryption from "../../Core/Utilities/Encryption";
/**
*AuthorizeType type enum
@return   instance AuthorizeSType
*/
export declare enum AuthorizeType {
    Roles = 0,
    Policy = 1
}
export declare class AuthorizeServices implements IAuthorizeServices {
    /**
     * @param request  express.js request for more inf https://expressjs.com/
     * @param response     express.js response for more inf https://expressjs.com/
     * @param authorizeSType authorizeSType
     * @param policyName     permission name such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
     * @param Encryption    Encryption class that encrpt all data in cookies
     * @param CookiesConfiguration    Cookies basic inforamtion such as name you can override to build your custom class
     */
    private request;
    private response;
    private authorizeSType;
    private policyName;
    private Encryption;
    private CookiesConfiguration;
    /** AuthorizeServices constructor
   * @param request  express.js request for more inf https://expressjs.com/
   * @param response     express.js response for more inf https://expressjs.com/
   * @param authorizeSType authorizeSType
   * @param policyName    policyName such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
   * @param Encryption    Encryption class that encrpt all data in cookies
   * @param CookiesConfiguration    Cookies basic inforamtion such as name you can override to build your custom class
   * @return new instance AuthorizeServices
   */
    constructor(request: any, response: any, authorizeSType: AuthorizeType, policyName: String, encryption: Encryption, cookiesConfiguration: CookiesConfiguration);
    /** iSAuthorize
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
          *  check if user have permisstion to access this method
         * @return new Boolean value
         */
    iSAuthorize(): Boolean;
    /** getUserInfo
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
          * getUser from http context cookies or header
         * @return new cookies modal value
         */
    getUserInfo(): any;
    /** checkRoles
      *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
      * check Roles from http context sunch as  admin and superadmin
      * @param userInfo user information afte login that contain role and permission
     * @return new Boolean value
     */
    checkRoles(userInfo: any): boolean;
    /** checkPolicy
              *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
              * check Roles from http context sunch as  admin and superadmin
              * @param userInfo user information afte login that contain role and permission
             * @return new Boolean value
             */
    checkPolicy(userInfo: any): any;
}
