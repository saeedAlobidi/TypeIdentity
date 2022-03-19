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
class UserManagerServices extends GenericServices_1.default {
    /** UserManagerServices constructor
    * @param IUserClaimsManagerRepos   user extra info  repository  interface
    * @return new instance of UserManagerServices
    */
    constructor(IUserManagerRepos, IUserClaimsManagerRepos) {
        super(IUserManagerRepos);
        this.IUserClaimsManagerRepos = IUserClaimsManagerRepos;
    }
    /** UserManagerServices
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param entity   UsersClaims Entity
   * @return new instance of UsersClaimsEntity
   */
    CreateUserClaimsAsync(entity) {
        return this.IUserClaimsManagerRepos.AddPromise(entity);
    }
    /** FindByUserNameAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param userName user name
   * @return   update  of UsersClaimsEntity
   */
    FindByUserNameAsync(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            const buildQueryBuild = yield this.IGenericRepository.GetQueryBuilder("users");
            var data = yield buildQueryBuild.where("users.userName =:userName")
                .setParameters({ userName: userName }).getOne();
            return (data);
        });
    }
    /** FindByIdAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param id user name
    * @return    UsersClaimsEntity
    */
    FindByIdAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const buildQueryBuild = yield this.IGenericRepository.GetQueryBuilder("users");
            return yield buildQueryBuild.where("users.id =:id").setParameters({ id: id }).getOne();
        });
    }
    /** getAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity Users Entity
    * @return    UsersClaimsEntity
    */
    getAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.IGenericRepository.GetAllPromise();
        });
    }
    /** addAsync
  *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
  * @param entity Users Entity
  * @return  new instance  UsersClaimsEntity
  */
    addAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.IGenericRepository.AddPromise(entity);
        });
    }
    /** addAsync
   *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
   * @param entity Users Entity
   * @return  update of UsersClaimsEntity
   */
    updateAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.IGenericRepository.UpdatePromise(entity);
        });
    }
    /** deleteAsync
    *validate() this is library used instead of try and catch for more inf https://www.npmjs.com/package/annotation-exception-handlers
    * @param entity Users Entity
    * @return  return delete status
    */
    deleteAsync(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.IGenericRepository.DeletePromise(entity);
        });
    }
}
__decorate([
    (0, validate_1.default)("CreateUserClaimsAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "CreateUserClaimsAsync", null);
__decorate([
    (0, validate_1.default)("FindByUserNameAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "FindByUserNameAsync", null);
__decorate([
    (0, validate_1.default)("FindByIdAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "FindByIdAsync", null);
__decorate([
    (0, validate_1.default)("getAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "getAsync", null);
__decorate([
    (0, validate_1.default)("addAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "addAsync", null);
__decorate([
    (0, validate_1.default)("updateAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "updateAsync", null);
__decorate([
    (0, validate_1.default)("deleteAsync"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserManagerServices.prototype, "deleteAsync", null);
exports.default = UserManagerServices;
//# sourceMappingURL=UserManagerServices.js.map