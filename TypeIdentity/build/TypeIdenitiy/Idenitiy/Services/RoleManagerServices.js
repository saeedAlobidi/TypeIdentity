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
const validate_1 = __importDefault(require("annotation-exception-handlers/validate"));
const GenericServices_1 = __importDefault(require("./GenericServices"));
class RoleManagerServices extends GenericServices_1.default {
    /**   RoleManagerServices constructor
   * @param IRoleManagerRepos Role Manager repository  interface
   * @param IRoleClaimsManagerRepos  permission repository  interface
   * @retunr new instance of RoleManagerServices
   */
    constructor(IRoleManagerRepos, IRoleClaimsManagerRepos) {
        super(IRoleManagerRepos);
        this.IRoleClaimsManagerRepos = IRoleClaimsManagerRepos;
    }
    /**   getRolesByNameAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param name role name
   * @retunr new instance of RolesEntity
   */
    getRolesByNameAsync(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const buildQueryBuild = yield this.IGenericRepository.GetQueryBuilder("roles");
            var data = yield buildQueryBuild.where("roles.name =:name")
                .setParameters({ name: name }).getOne();
            return (data);
        });
    }
    /**   addPermisstionAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity  RolesEntityClaimsEntity  databse
    * @retunr new instance of RolesEntityClaimsEntity
    */
    addPermisstionAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield this.IRoleClaimsManagerRepos.AddPromise(entity);
            return value;
        });
    }
    /**   getAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr new instance of RolesEntity
     */
    getAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield this.IGenericRepository.GetAllPromise();
            return value;
        });
    }
    /**   addAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr new instance of RolesEntity
     */
    addAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            entity.normalizedName = entity.name;
            return this.IGenericRepository.AddPromise(entity);
        });
    }
    /**   updateAsync
     *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
     * @param entity  RolesEntity  databse
     * @retunr  update  of RolesEntity
     */
    updateAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.IGenericRepository.UpdatePromise(entity);
        });
    }
    /**  deleteAsync
      *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
      * @param entity  RolesEntity  databse
      * @retunr  delete status
      */
    deleteAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield this.IGenericRepository.DeletePromise(entity);
            return value;
        });
    }
}
__decorate([
    (0, validate_1.default)("addRolesClaimsAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "getRolesByNameAsync", null);
__decorate([
    (0, validate_1.default)("addRolesClaimsAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "addPermisstionAsync", null);
__decorate([
    (0, validate_1.default)("getAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "getAsync", null);
__decorate([
    (0, validate_1.default)("addAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "addAsync", null);
__decorate([
    (0, validate_1.default)("updateAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "updateAsync", null);
__decorate([
    (0, validate_1.default)("deleteAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleManagerServices.prototype, "deleteAsync", null);
exports.default = RoleManagerServices;
//# sourceMappingURL=RoleManagerServices.js.map