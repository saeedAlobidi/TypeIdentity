import { Connection } from 'typeorm';
import DbConstraint from './DbConstraint';
export default interface IContext {
    Dbcont: Promise<Connection>;
    config: DbConstraint;
}
