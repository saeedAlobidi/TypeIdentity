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
const Encryption_1 = __importDefault(require("../../Core/Utilities/Encryption"));
const GenericServices_1 = __importDefault(require("./GenericServices"));
class SignInManagerServices extends GenericServices_1.default {
    /** SignInManagerServices constructor
   
  * @param Encryption  Encryption class that encrpt all data in cookies
  * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
  * @param CookiesModel    user info that save encrpt inside cookies
  * @param IUserClaimsManagerRepos extra info user repository interface
  * @param IUserManagerRepos   User Manager repository  interface
  * @param IRoleClaimsManagerRepos   permission Manager repository  interface
   * @param request   express.js request
  * @param response     express.js response
  * @returns  new instance SignInManagerServices
  */
    constructor(request, response, CookiesConfiguration, IUserManagerRepos, IUserClaimsManagerRepos, CookiesModel) {
        super(IUserManagerRepos);
        this.Encryption = new Encryption_1.default(CookiesConfiguration);
        this.IUserClaimsManagerRepos = IUserClaimsManagerRepos;
        this.CookiesModel = CookiesModel;
        this.request = request;
        this.response = response;
        this.CookiesConfiguration = CookiesConfiguration;
    }
    /** SignInAsync
     * this function will collection all user information and encrpt  add to cookies
     * @param user user information
     * @returns  void
    */
    SignInAsync(user, isPersistent) {
        return __awaiter(this, void 0, void 0, function* () {
            const buildQueryBuild = yield this.IUserClaimsManagerRepos.GetQueryBuilder("EntityClaims");
            const permisstions = yield buildQueryBuild.where("EntityClaims.roleId =:roleId")
                .setParameters({ roleId: user.RoleId }).getMany();
            const cookiesData = this.CookiesModel.builder().setUser(user)
                .setPermisstion(permisstions);
            this.response.cookie(this.CookiesConfiguration.getName(), this.Encryption.crypto(this.CookiesModel), {
                //Todo: expires: new Date(this.CookiesConfiguration.getExpires()),
                httpOnly: this.CookiesConfiguration.getHttpOnly(),
                secure: this.CookiesConfiguration.getSecure()
            });
            this.response.status(200).redirect(this.CookiesConfiguration.getSuccessfullyPage());
        });
    }
    /** SignOutAsync
     * this function will clear all collection
     * @param user user information
     * @returns  void
    */
    SignOutAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.response.clearCookie(this.CookiesConfiguration.getName());
            this.response.status(200).redirect(this.CookiesConfiguration.getLoginPage());
        });
    }
}
exports.default = SignInManagerServices;
//# sourceMappingURL=SignInManagerServices.js.map