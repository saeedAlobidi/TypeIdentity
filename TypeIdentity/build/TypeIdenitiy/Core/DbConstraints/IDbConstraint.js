"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IdentityRoleClaims_1 = __importDefault(require("../../Entity/IdentityRoleClaims"));
const IdentityRoles_1 = __importDefault(require("../../Entity/IdentityRoles"));
const IdentityUserClaims_1 = __importDefault(require("../../Entity/IdentityUserClaims"));
const IdentityUserLogins_1 = __importDefault(require("../../Entity/IdentityUserLogins"));
const IdentityUsers_1 = __importDefault(require("../../Entity/IdentityUsers"));
const IdentityUserTokens_1 = __importDefault(require("../../Entity/IdentityUserTokens"));
class IDbConstraint {
    constructor() {
        /** abstract class  IDbConstraint
         * @param type database type mssql,oracle ect for more info  https://typeorm.io
         * @param host  ip address of your database
         * @param username  database username
         * @param password database password
         * @param database database  name
         */
        this.entitiesHash = [
            { key: "users", value: IdentityUsers_1.default },
            { key: "roles", value: IdentityRoles_1.default },
            { key: "roleClaims", value: IdentityRoleClaims_1.default },
            { key: "userClaims", value: IdentityUserClaims_1.default },
            { key: "userLogins", value: IdentityUserLogins_1.default },
            { key: "userTokens", value: IdentityUserTokens_1.default }
        ];
        this.entities = this.entitiesHash.map(entity => entity.value);
        this.synchronize = false;
        this.migrations = ["IdentityEntity/migration/*.ts"];
        this.cli = { "migrationsDir": "Migration" };
        this.logging = false;
        this.extra = { "trustServerCertificate": true };
        this.setUserEntity = (IdentityUsersEntity) => this.setEntityProxy(IdentityUsers_1.default, IdentityUsersEntity, "users");
        this.setRoleEntity = (IdentityRolesEntity) => this.setEntityProxy(IdentityRoles_1.default, IdentityRolesEntity, "roles");
        this.setRoleClaimsEntity = (IdentityRoleClaimsEntity) => this.setEntityProxy(IdentityRoleClaims_1.default, IdentityRoleClaimsEntity, "roleClaims");
        this.setUserClaimsEntity = (IdentityUserClaimsEntity) => this.setEntityProxy(IdentityUserClaims_1.default, IdentityUserClaimsEntity, "userClaims");
        this.setUserLoginsEntity = (IdentityUserLoginsEntity) => this.setEntityProxy(IdentityUserLogins_1.default, IdentityUserLoginsEntity, "userLogins");
        this.setUserTokensEntity = (IdentityUserTokensEntity) => this.setEntityProxy(IdentityUserTokens_1.default, IdentityUserTokensEntity, "userTokens");
    }
    setEntityProxy(oldEntity, newEntity, key) {
        this.entities[this.entities.indexOf(oldEntity)] = newEntity;
        this.entitiesHash.filter(entity => entity.key == key)[0].value = newEntity;
    }
    getEntity(entityKey) {
        return this.entitiesHash.filter(entity => entity.key == entityKey)[0].value;
    }
}
exports.default = IDbConstraint;
//# sourceMappingURL=IDbConstraint.js.map