"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const Encryption_1 = __importDefault(require("../Utilities/Encryption"));
const AuthorizeServices_1 = require("../../Idenitiy/Services/AuthorizeServices");
/**Authorize annotation check if user have permission to access this function inside class
  * @param authorizeSType authorizeSType (  Roles,Policy)
  * @param policyName    permission name such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
  */
function Authorize(authorizeSType, policyName) {
    return function inti(target, propertyName, descriptor) {
        const method = descriptor.value;
        descriptor.value = function () { return checkAuthorize.call(this, arguments); };
        let checkAuthorize = function (arg) {
            let CookiesConfiguration = tsyringe_1.container.resolve("CookiesConfiguration");
            const authorizeServices = new AuthorizeServices_1.AuthorizeServices(arg[0], arg[1], authorizeSType, policyName, new Encryption_1.default(CookiesConfiguration), CookiesConfiguration);
            if (authorizeServices.iSAuthorize())
                return method.call(this, ...Array.prototype.slice.call(arg));
            else
                arg[1].status(401).redirect(CookiesConfiguration.getLoginPage());
            return;
        };
    };
}
exports.Authorize = Authorize;
//# sourceMappingURL=Authorize.js.map