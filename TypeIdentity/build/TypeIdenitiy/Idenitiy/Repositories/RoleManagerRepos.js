"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenericRepository_1 = __importDefault(require("./GenericRepository"));
class RoleManagerRepos extends GenericRepository_1.default {
    /**
*  RoleManagerRepos constructor
* @param conetxt  database conext
* @param entity  database entity
@return new instance RoleManagerRepos
*/
    constructor(conetxt, entity) {
        super(conetxt, entity);
    }
}
exports.default = RoleManagerRepos;
//# sourceMappingURL=RoleManagerRepos.js.map