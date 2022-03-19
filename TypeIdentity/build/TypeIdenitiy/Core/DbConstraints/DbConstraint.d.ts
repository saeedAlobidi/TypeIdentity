import IDbConstraint from "./IDbConstraint";
export default class DbConstraint extends IDbConstraint {
    /**
     * @param type database type mssql,oracle ect for more info  https://typeorm.io
     * @param host  ip address of your database
     * @param username  database username
     * @param password database password
     * @param database database  name
     */
    type: any;
    host: any;
    username: any;
    password: any;
    database: any;
}
