import IGenericRepository from "../../Core/Repositories/IGenericRepository";
import IServices from "../../Core/Services/IServices";
export default abstract class GenericServices<T> implements IServices<T> {
    /**   Generic abstract services that contain basic operation
     * @param IGenericRepository gereric Repositor
     */
    protected IGenericRepository: IGenericRepository<T>;
    /** GenericServices  constructor
     * @param IGenericRepository gereric Repositor
     * @return new instance GenericServices
     */
    constructor(IGenericRepository: IGenericRepository<T>);
    /** getAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    getAsync(entity: any): Promise<T>;
    /** addAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    addAsync(entity: any): Promise<T>;
    /** updateAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    updateAsync(entity: any): Promise<T>;
    /** deleteAsync
      * @param entity database entity
      * @return  Promise of  entity
      */
    deleteAsync(entity: any): Promise<T>;
}
