"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const RoleClaimsManagerRepos_1 = __importDefault(require("../Repositories/RoleClaimsManagerRepos"));
const RoleManagerRepos_1 = __importDefault(require("../Repositories/RoleManagerRepos"));
const RoleManagerServices_1 = __importDefault(require("../Services/RoleManagerServices"));
class RoleManager {
    constructor() {
        /**
         * @param context  database context
         * @param IRoleManagerServices   Role Manager service interface
         * @param roleManagerRepos   Role Manager repository  interface
         * @param roleClaimsManagerRepos   permission  Manager repository  interface
         */
        this.context = tsyringe_1.container.resolve("DbContext");
        this.roleManagerRepos = new RoleManagerRepos_1.default(this.context, this.context.config.getEntity("roles"));
        this.roleClaimsManagerRepos = new RoleClaimsManagerRepos_1.default(this.context, this.context.config.getEntity("roleClaims"));
        /**
         *  setRoleManagerServices: allow to customize role manager repository
         * @param RoleManagerRepos  Role Manager repository  interface
         * @return instance RoleManager
         */
        this.setRoleManagerServices = (RoleManagerRepos) => {
            this.roleManagerRepos = RoleManagerRepos;
            return this;
        };
        /**
         *  setRoleClaimsManagerRepos: allow to customize permission  manager repository
         * @param roleClaimsManagerRepos   permission  Manager repository  interface
         * @return instance RoleManager
         */
        this.setRoleClaimsManagerRepos = (roleClaimsManagerRepos) => {
            this.roleClaimsManagerRepos = roleClaimsManagerRepos;
            return this;
        };
    }
    /**
     * build Role Manager
     * @return instance RoleManager
     */
    build() {
        this.IRoleManagerServices = new RoleManagerServices_1.default(this.roleManagerRepos, this.roleClaimsManagerRepos);
        return this.IRoleManagerServices;
    }
}
exports.default = RoleManager;
//# sourceMappingURL=RoleManager.js.map