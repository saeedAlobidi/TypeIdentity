"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const CookiesModel_1 = require("../../Core/Common/CookiesModel");
const Migration_1 = __importDefault(require("../Configuration/Migration"));
const DI_1 = __importDefault(require("./DI"));
class TypeIdentity {
    constructor() {
        /**
           
           * @param dbConstraint  database Constraint
           * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
           * @param CookiesModel    user info that save encrpt inside cookies
           */
        this.CookiesModel = CookiesModel_1.CookiesModel;
        this.CookiesConfiguration = CookiesModel_1.IdentityCookiesConfiguration;
        /** setDatabaseConfig
          
          * @param dbConfig  database Constraint
          * @return new instance of type identity
          */
        this.setDatabaseConfig = (dbConfig) => {
            this.dbConstraint = dbConfig;
            return this;
        };
        this.build = () => new DI_1.default()
            .setDbConstraint(this.dbConstraint)
            .seCookiesConfig(this.CookiesModel, this.CookiesConfiguration)
            .build();
    }
    /** seCookiesConfig
      
      * @param CookieOption
      * @return new instance of type identity
      */
    seCookiesConfig(CookiesConfiguration = CookiesModel_1.IdentityCookiesConfiguration) {
        this.CookiesConfiguration = CookiesConfiguration;
        return this;
    }
    migrationConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, Migration_1.default)(tsyringe_1.container.resolve("DbConstraint"));
            return this;
        });
    }
}
exports.default = TypeIdentity;
//# sourceMappingURL=TypeIdentity.js.map