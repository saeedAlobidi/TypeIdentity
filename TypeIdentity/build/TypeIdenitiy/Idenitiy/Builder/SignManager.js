"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const RoleClaimsManagerRepos_1 = __importDefault(require("../Repositories/RoleClaimsManagerRepos"));
const UserManagerRepos_1 = __importDefault(require("../Repositories/UserManagerRepos"));
const SignInManagerServices_1 = __importDefault(require("../Services/SignInManagerServices"));
class SignManager {
    constructor() {
        /**
        
        * @param context  database context
        * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
        * @param CookiesModel    user info that save encrpt inside cookies
        * @param ISignInManagerServices Sign Manager service interface
        * @param IUserManagerRepos   User Manager repository  interface
        * @param IRoleClaimsManagerRepos   permission Manager repository  interface
        
        */
        this.context = tsyringe_1.container.resolve("DbContext");
        this.CookiesConfiguration = tsyringe_1.container.resolve("CookiesConfiguration");
        this.CookiesModel = tsyringe_1.container.resolve("CookiesModel");
        this.IUserManagerRepos = new UserManagerRepos_1.default(this.context, this.context.config.getEntity("users"));
        this.IRoleClaimsManagerRepos = new RoleClaimsManagerRepos_1.default(this.context, this.context.config.getEntity("roleClaims"));
        /**
        * setUserManagerServices allow to customize user manager
        * @param IUserManagerRepos   User Manager repository  interface
        *@return instance SignManager
        */
        this.setUserManagerServices = (IUserManagerRepos) => {
            this.IUserManagerRepos = IUserManagerRepos;
            return this;
        };
        /**
         * setRoleClaimsManagerRepos allow to customize user manager
         * @param IRoleClaimsManagerRepos   permission repository  interface
         *@return instance SignManager
         */
        this.setRoleClaimsManagerRepos = (IRoleClaimsManagerRepos) => {
            this.IRoleClaimsManagerRepos = IRoleClaimsManagerRepos;
            return this;
        };
    }
    /**
    *  build instance
    * @param req   express.js request
    * @param res   express.js response
    *@return instance SignManager
    */
    build(req, res) {
        this.ISignInManagerServices =
            new SignInManagerServices_1.default(req, res, this.CookiesConfiguration, this.IUserManagerRepos, this.IRoleClaimsManagerRepos, this.CookiesModel);
        return this.ISignInManagerServices;
    }
}
exports.default = SignManager;
//# sourceMappingURL=SignManager.js.map