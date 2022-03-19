export declare abstract class IdentityCookies<userEntity> {
    /**Authorize annotation check if user have permission to access this function inside class
      * @param user  user Entity
      * @param roleName    (permission name or role name ) such as admin or superadmin if authorizeSType Roles or read,write if authorizeSType Policy
      * @param rolePermisstion  all permission that user have
      */
    private user;
    private roleName;
    private rolePermisstion;
    builder(): this;
    setUser(user: userEntity): this;
    setPermisstion(rolePermisstion: Array<any>): this;
    getUser(): userEntity;
    getPermissition(): Array<any>;
    build(): string;
}
export declare class CookiesModel<userEntity> extends IdentityCookies<userEntity> {
}
export declare abstract class CookiesConfiguration {
    protected name: string;
    protected expires: number;
    protected httpOnly: boolean;
    protected secure: boolean;
    protected secretKey: any;
    protected loginPage: string;
    protected successfullyPage: string;
    setName: (name: any) => any;
    getName: () => string;
    setExpires: (expires: any) => any;
    getExpires: () => number;
    setHttpOnly: (httpOnly: any) => any;
    getHttpOnly: () => boolean;
    setSecure: (secure: any) => any;
    getSecure: () => boolean;
    setSecretKey: (secretKey: any) => any;
    getSecretKey: () => any;
    setLoginPage: (loginPage: any) => any;
    getLoginPage: () => string;
    setSuccessfullyPage: (successfullyPage: any) => any;
    getSuccessfullyPage: () => string;
}
export declare class IdentityCookiesConfiguration extends CookiesConfiguration {
}
