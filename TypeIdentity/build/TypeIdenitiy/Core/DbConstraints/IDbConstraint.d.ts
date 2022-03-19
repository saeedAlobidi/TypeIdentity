export default abstract class IDbConstraint {
    /** abstract class  IDbConstraint
     * @param type database type mssql,oracle ect for more info  https://typeorm.io
     * @param host  ip address of your database
     * @param username  database username
     * @param password database password
     * @param database database  name
     */
    abstract type: String;
    abstract host: String;
    abstract username: String;
    abstract password: String;
    abstract database: String;
    entitiesHash: Array<any>;
    entities: Array<any>;
    synchronize: any;
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    logging: any;
    extra: any;
    setUserEntity: (IdentityUsersEntity: any) => void;
    setRoleEntity: (IdentityRolesEntity: any) => void;
    setRoleClaimsEntity: (IdentityRoleClaimsEntity: any) => void;
    setUserClaimsEntity: (IdentityUserClaimsEntity: any) => void;
    setUserLoginsEntity: (IdentityUserLoginsEntity: any) => void;
    setUserTokensEntity: (IdentityUserTokensEntity: any) => void;
    private setEntityProxy;
    getEntity(entityKey: any): any;
}
