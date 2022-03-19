import { Connection, EntityTarget, Repository, SelectQueryBuilder } from 'typeorm';
import IContext from '../../Core/DbConstraints/IContext';
import IGenericRepository from '../../Core/Repositories/IGenericRepository';
export default abstract class GenericRepository<T> implements IGenericRepository<T> {
    /**
     *  Generic abstract Repository that contain basic operation
     * @param repository  Database repository TyoeRom more inf(https://typeorm.io/#/working-with-entity-manager)
     * @param Dbcont  database Connection
     * @param conetxt  database conext
     * @param entity  database entity
     * @param query  query builder you can create you own builder
     */
    protected repository: Repository<T>;
    protected Dbcont: Promise<Connection>;
    protected conetxt: IContext;
    protected entity: EntityTarget<T>;
    protected query: SelectQueryBuilder<T>;
    /**
    *  GenericRepository constructor
    * @param conetxt database conext
    * @param entity database entity
    * @return new instance
    */
    constructor(conetxt: IContext, entity: EntityTarget<T>);
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    GetQuery(query: string): Promise<any>;
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    GetQueryBuilder(queryBuilderAlias: string): Promise<SelectQueryBuilder<T>>;
    /**
    *  query builder
    * @param query database query string
    * @return new entity
    */
    BuildQueryBuild(queryBuilderAlias: string): Promise<this>;
    /**
   *  GetByIdPromise
   * @param id database id ofentity
   * @return new entity
   */
    GetByIdPromise(id: any): Promise<T[]>;
    /**
    *  GetAllPromise get all data in same entity
    *
    * @return new entity
    */
    GetAllPromise(): Promise<T[]>;
    /**
    *  AddPromise entity
    * @param entity  new instance database entity
    * @return insert entity
    */
    AddPromise(entity: T): Promise<T>;
    /**
 *  UpdatePromise entity
 * @param entity entity that you want update
 * @return update entity
 */
    UpdatePromise(entity: T): Promise<T>;
    /**
 *  DeletePromise entity
 * @param entity  the  entity you want to delete
 * @return update entity
 */
    DeletePromise(entity: T): Promise<import("typeorm").DeleteResult>;
}
