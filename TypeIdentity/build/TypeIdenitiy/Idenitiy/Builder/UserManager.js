"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const UserClaimsManagerServices_1 = __importDefault(require("../Repositories/UserClaimsManagerServices"));
const UserManagerRepos_1 = __importDefault(require("../Repositories/UserManagerRepos"));
const UserManagerServices_1 = __importDefault(require("../Services/UserManagerServices"));
class UserManager {
    constructor() {
        /**
        
        * @param context  database context
        * @param IUserManagerServices User Manager service interface
        * @param IUserManagerRepos   User Manager repository  interface
        * @param IUserClaimsManagerRepos   user extra info  repository  interface
        
        */
        this.context = tsyringe_1.container.resolve("DbContext");
        this.IUserManagerRepos = new UserManagerRepos_1.default(this.context, this.context.config.getEntity("users"));
        this.IUserClaimsManagerRepos = new UserClaimsManagerServices_1.default(this.context, this.context.config.getEntity("userClaims"));
        /**
          * setUserManagerServices allow to customize user manager
          * @param IUserManagerRepos   User Manager repository  interface
          *@return instance UserManager
          */
        this.setRoleManagerServices = (IUserManagerRepos) => {
            this.IUserManagerRepos = IUserManagerRepos;
            return this;
        };
        /**
          * setUserManagerServices allow to customize extra information user manager
          * @param IUserClaimsManagerRepos   User extra info Manager repository  interface
          *@return instance UserManager
          */
        this.setRoleClaimsManagerRepos = (IUserClaimsManagerRepos) => {
            this.IUserClaimsManagerRepos = IUserClaimsManagerRepos;
            return this;
        };
    }
    /**
    *  build instance
    *@return instance UserManager
    */
    build() {
        this.IUserManagerServices = new UserManagerServices_1.default(this.IUserManagerRepos, this.IUserClaimsManagerRepos);
        return this.IUserManagerServices;
    }
}
exports.default = UserManager;
//# sourceMappingURL=UserManager.js.map