"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeServices = exports.AuthorizeType = void 0;
const validate_1 = __importDefault(require("annotation-exception-handlers/validate"));
/**
*AuthorizeType type enum
@return   instance AuthorizeSType
*/
var AuthorizeType;
(function (AuthorizeType) {
    AuthorizeType[AuthorizeType["Roles"] = 0] = "Roles";
    AuthorizeType[AuthorizeType["Policy"] = 1] = "Policy";
})(AuthorizeType = exports.AuthorizeType || (exports.AuthorizeType = {}));
class AuthorizeServices {
    /** AuthorizeServices constructor
   * @param request  express.js request for more inf https://expressjs.com/
   * @param response     express.js response for more inf https://expressjs.com/
   * @param authorizeSType authorizeSType
   * @param policyName    policyName such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
   * @param Encryption    Encryption class that encrpt all data in cookies
   * @param CookiesConfiguration    Cookies basic inforamtion such as name you can override to build your custom class
   * @return new instance AuthorizeServices
   */
    constructor(request, response, authorizeSType, policyName, encryption, cookiesConfiguration) {
        this.request = request;
        this.response = response;
        this.authorizeSType = authorizeSType;
        this.policyName = policyName;
        this.Encryption = encryption;
        this.CookiesConfiguration = cookiesConfiguration;
    }
    /** iSAuthorize
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
          *  check if user have permisstion to access this method
         * @return new Boolean value
         */
    iSAuthorize() {
        const encrptUserInfo = this.request.cookies[this.CookiesConfiguration.getName()];
        const userInfo = this.Encryption.decrypt(encrptUserInfo);
        return this.authorizeSType == AuthorizeType.Roles ? this.checkRoles(userInfo) : this.checkPolicy(userInfo);
    }
    /** getUserInfo
          *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
          * getUser from http context
          * @param userInfo user information afte login that contain role and permission
         * @return new cookies modal value
         */
    getUserInfo(userInfo) { return userInfo; }
    /** checkRoles
      *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
      * check Roles from http context sunch as  admin and superadmin
      * @param userInfo user information afte login that contain role and permission
     * @return new Boolean value
     */
    checkRoles(userInfo) {
        const inf = this.getUserInfo(userInfo);
        return inf.user.RoleName.trim() == this.policyName.trim() ? true : false;
    }
    /** checkPolicy
              *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
              * check Roles from http context sunch as  admin and superadmin
              * @param userInfo user information afte login that contain role and permission
             * @return new Boolean value
             */
    checkPolicy(userInfo) {
        const inf = this.getUserInfo(userInfo);
        return inf.rolePermisstion.filter((policy) => policy.claimValue.trim() == this.policyName.trim());
    }
}
__decorate([
    (0, validate_1.default)("iSAuthorize"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], AuthorizeServices.prototype, "iSAuthorize", null);
__decorate([
    (0, validate_1.default)("checkRoles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthorizeServices.prototype, "getUserInfo", null);
__decorate([
    (0, validate_1.default)("checkRoles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthorizeServices.prototype, "checkRoles", null);
__decorate([
    (0, validate_1.default)("checkPolicy"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthorizeServices.prototype, "checkPolicy", null);
exports.AuthorizeServices = AuthorizeServices;
//# sourceMappingURL=AuthorizeServices.js.map