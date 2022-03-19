import { inject, injectable, singleton } from "tsyringe";
import { Connection, createConnection } from "typeorm";
import DbConstraint from "../../Core/DbConstraints/DbConstraint";
import IContext from "../../Core/DbConstraints/IContext";




@singleton()
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
    constructor(@inject("DbConstraint") config) {
        this.config = config
        this.Dbcont = createConnection(this.config);

    }


    /**
     *  getConnection 
     * @return get database connection
     */
    async getConnection() {
        return this.Dbcont
    }



}

