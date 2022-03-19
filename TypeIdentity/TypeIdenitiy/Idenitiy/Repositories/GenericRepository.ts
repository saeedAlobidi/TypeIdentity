import { Connection, EntityTarget, Repository, SelectQueryBuilder, getManager } from 'typeorm';
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
    protected entity: EntityTarget<T>
    protected query: SelectQueryBuilder<T>;


    /**
    *  GenericRepository constructor
    * @param conetxt database conext
    * @param entity database entity
    * @return new instance
    */
    constructor(conetxt: IContext, entity: EntityTarget<T>) {

        this.Dbcont = conetxt.Dbcont;
        this.conetxt = conetxt;
        this.entity = entity;
    }



    /**
    *  query builder  
    * @param query database query string
    * @return new entity
    */

    async GetQuery(query: string) {
        const connection = await this.Dbcont
        const data = await connection.query(query);
        return data;
    }

    /**
    *  query builder  
    * @param query database query string
    * @return new entity
    */


    async GetQueryBuilder(queryBuilderAlias: string) {
        const connection = await this.Dbcont
        this.query = await connection.getRepository<T>(this.entity).createQueryBuilder(queryBuilderAlias);
        return this.query;
    }

    /**
    *  query builder  
    * @param query database query string
    * @return new entity
    */

    async BuildQueryBuild(queryBuilderAlias: string) {
        const connection = await this.Dbcont
        this.query = await connection.getRepository<T>(this.entity).createQueryBuilder(queryBuilderAlias);
        return this;
    }


    /**
   *  GetByIdPromise
   * @param id database id ofentity
   * @return new entity
   */
    async GetByIdPromise(id: any) {
        const connection = await this.Dbcont
        return connection.getRepository<T>(this.entity).findByIds([id]);
    }




    /**
    *  GetAllPromise get all data in same entity
    * 
    * @return new entity
    */
    async GetAllPromise() {

        const connection = await this.Dbcont
        return connection.getRepository<T>(this.entity).find();

    }


    /**
    *  AddPromise entity
    * @param entity  new instance database entity
    * @return insert entity
    */
    async AddPromise(entity: T) {
        const connection = await this.Dbcont
        return connection.getRepository<T>(this.entity).save(entity);
    }

    /**
 *  UpdatePromise entity
 * @param entity entity that you want update
 * @return update entity
 */

    async UpdatePromise(entity: T) {
        const connection = await this.Dbcont
        return connection.getRepository<T>(this.entity).save(entity);
    }

    /**
 *  DeletePromise entity
 * @param entity  the  entity you want to delete
 * @return update entity
 */

    async DeletePromise(entity: T) {
        const connection = await this.Dbcont
        return connection.getRepository<T>(this.entity).delete(entity);
    }

}
