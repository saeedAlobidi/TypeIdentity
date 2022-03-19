import "reflect-metadata";
export default class TypeIdentity {
    /**
       
       * @param dbConstraint  database Constraint
       * @param CookiesConfiguration  cookikes CookiesConfiguration such as name..etc
       * @param CookiesModel    user info that save encrpt inside cookies
       */
    private CookiesModel;
    private CookiesConfiguration;
    private dbConstraint;
    /** setDatabaseConfig
      
      * @param dbConfig  database Constraint
      * @return new instance of type identity
      */
    setDatabaseConfig: (dbConfig: any) => this;
    /** seCookiesConfig
      
      * @param CookieOption
      * @return new instance of type identity
      */
    seCookiesConfig(CookieOption?: (option: any) => void): this;
    migrationConfig(): Promise<this>;
    build: () => void;
}
