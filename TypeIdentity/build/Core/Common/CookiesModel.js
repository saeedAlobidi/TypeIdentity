"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityCookiesConfiguration = exports.CookiesConfiguration = exports.CookiesModel = exports.IdentityCookies = void 0;
class IdentityCookies {
    builder() {
        this.user = null;
        this.roleName = null;
        this.rolePermisstion = [];
        return this;
    }
    setUser(user) {
        this.user = user;
        return this;
    }
    setPermisstion(rolePermisstion) {
        this.rolePermisstion = rolePermisstion;
        return this;
    }
    getUser() {
        return this.user;
    }
    getPermissition() {
        return this.rolePermisstion;
    }
    build() {
        return JSON.stringify(this);
    }
}
exports.IdentityCookies = IdentityCookies;
class CookiesModel extends IdentityCookies {
}
exports.CookiesModel = CookiesModel;
class CookiesConfiguration {
    constructor() {
        this.name = "TypeIdentity";
        this.expires = 1 * 24 * 3600 * 1000;
        this.httpOnly = false;
        this.secure = false;
        this.secretKey = "TypeIdentity_saeed1adm@gmail.com";
        this.loginPage = "/Login";
        this.successfullyPage = "/";
        this.setName = (name) => this.name = name;
        this.getName = () => { return this.name; };
        this.setExpires = (expires) => this.expires = expires;
        this.getExpires = () => { return this.expires; };
        this.setHttpOnly = (httpOnly) => this.httpOnly = httpOnly;
        this.getHttpOnly = () => { return this.httpOnly; };
        this.setSecure = (secure) => this.secure = secure;
        this.getSecure = () => { return this.secure; };
        this.setSecretKey = (secretKey) => this.secretKey = secretKey;
        this.getSecretKey = () => { return this.secretKey; };
        this.setLoginPage = (loginPage) => this.loginPage = loginPage;
        this.getLoginPage = () => { return this.loginPage; };
        this.setSuccessfullyPage = (successfullyPage) => this.successfullyPage = successfullyPage;
        this.getSuccessfullyPage = () => { return this.successfullyPage; };
    }
}
exports.CookiesConfiguration = CookiesConfiguration;
class IdentityCookiesConfiguration extends CookiesConfiguration {
}
exports.IdentityCookiesConfiguration = IdentityCookiesConfiguration;
//# sourceMappingURL=CookiesModel.js.map