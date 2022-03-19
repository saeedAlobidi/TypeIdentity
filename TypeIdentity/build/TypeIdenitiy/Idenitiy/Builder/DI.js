"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CookiesModel_1 = require("../../Core/Common/CookiesModel");
const DbConstraint_1 = __importDefault(require("../../Core/DbConstraints/DbConstraint"));
const DbContext_1 = __importDefault(require("../DbContexts/DbContext"));
class DI {
    constructor() {
        this._DbConstraint = DbConstraint_1.default;
        this._DbContext = DbContext_1.default;
        this.CookieModal = CookiesModel_1.CookiesModel;
        this.CookiesConfiguration = CookiesModel_1.IdentityCookiesConfiguration;
    }
    /**
    *  Databse Constraint
    * @param DbConstraint database constraint {name,password ..etc}
    * @return void
    */
    setDbConstraint(DbConstraint) {
        this._DbConstraint = DbConstraint;
        return this;
    }
    /**
    * seDbContext
    * @param DbContext  new instance of Database Context TypeOrm Library
    * @return void
    */
    seDbContext(DbContext) {
        this._DbContext = DbContext;
        return this;
    }
    /**
     * seCookiesConfig
     * @param CookieModal the cookies modal user info
     * @return void
     */
    seCookiesConfig(CookieModal, CookiesConfiguration) {
        this.CookieModal = CookieModal;
        this.CookiesConfiguration = CookiesConfiguration;
        return this;
    }
    /**
    *  build dependency injection
    * @return void
    */
    build() {
        tsyringe_1.container.register("DbConstraint", {
            useClass: this._DbConstraint
        }, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        tsyringe_1.container.register("DbContext", {
            useClass: this._DbContext
        }, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        tsyringe_1.container.register("CookiesModel", {
            useClass: this.CookieModal
        }, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        tsyringe_1.container.register("CookiesConfiguration", {
            useClass: this.CookiesConfiguration
        }, { lifecycle: tsyringe_1.Lifecycle.Singleton });
    }
}
exports.default = DI;
//# sourceMappingURL=DI.js.map