import { Connection } from "typeorm";
import DbConstraint from "../../Core/DbConstraints/DbConstraint";
import IContext from "../../Core/DbConstraints/IContext";
export default class DbContext implements IContext {
    /**
     * @param Dbcont  typeOrm connection
     * @param config  database configuration
     */
    Dbcont: Promise<Connection>;
    config: DbConstraint;
    /**
     *  DbContext constructor
     * @param config  inject DbConstraint from container
     */
    constructor(config: any);
    /**
     *  getConnection
     * @return get database connection
     */
    getConnection(): Promise<Connection>;
}
