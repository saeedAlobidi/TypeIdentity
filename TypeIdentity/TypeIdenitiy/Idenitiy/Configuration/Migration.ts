import { Connection, createConnection } from "typeorm";
import DbConstraint from "../../Core/DbConstraints/DbConstraint";




export default async (config:DbConstraint) => {
    config.synchronize=true
    config.logging=true
    const connection: Connection = await createConnection(config);
    await connection.synchronize(true);
    await connection.runMigrations({ transaction: 'all', });
}
