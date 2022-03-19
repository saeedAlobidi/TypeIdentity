import IGenericRepository from "../../Core/Repositories/IGenericRepository";
import IServices from "../../Core/Services/IServices";

 

export default abstract class GenericServices<T> implements IServices<T>{


  /**   Generic abstract services that contain basic operation
   * @param IGenericRepository gereric Repositor
   */


  protected IGenericRepository: IGenericRepository<T>


  /** GenericServices  constructor
   * @param IGenericRepository gereric Repositor
   * @return new instance GenericServices
   */


  constructor(IGenericRepository: IGenericRepository<T>) {
    this.IGenericRepository = IGenericRepository;
  }

  /** getAsync  
    * @param entity database entity
    * @return  Promise of  entity
    */

  getAsync(entity): Promise<T> {
    throw new Error('Method not implemented.');
  }


  /** addAsync  
    * @param entity database entity
    * @return  Promise of  entity
    */

  addAsync(entity): Promise<T> {
    throw new Error('Method not implemented.');
  }

  /** updateAsync
    * @param entity database entity
    * @return  Promise of  entity
    */

  updateAsync(entity): Promise<T> {
    throw new Error('Method not implemented.');
  }

  /** deleteAsync
    * @param entity database entity
    * @return  Promise of  entity
    */
  deleteAsync(entity): Promise<T> {
    throw new Error('Method not implemented.');
  }


}



