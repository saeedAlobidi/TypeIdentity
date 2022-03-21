export default class DI {
    private _DbConstraint;
    private _DbContext;
    private _CookieModal;
    private _CookiesConfiguration;
    /**
    *  Databse Constraint
    * @param DbConstraint database constraint {name,password ..etc}
    * @return void
    */
    setDbConstraint(DbConstraint: any): this;
    /**
    * seDbContext
    * @param DbContext  new instance of Database Context TypeOrm Library
    * @return void
    */
    seDbContext(DbContext: any): this;
    /**
     * seCookiesConfig
     * @param CookieModal the cookies modal user info
     * @return void
     */
    seCookiesConfig(CookieModal: any, CookiesConfiguration: any): this;
    /**
    *  build dependency injection
    * @return void
    */
    build(): void;
}
